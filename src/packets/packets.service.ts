import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Packet } from './entity/packet.entity';
import { CreatePacketDto } from './dto/create-packet.dto';

@Injectable()
export class PacketsService {
  constructor(
    @InjectRepository(Packet)
    private readonly packetRepository: Repository<Packet>,
  ) {}

  async addPacket(packetData: CreatePacketDto): Promise<any> {
    const packet = this.packetRepository.create(packetData);
    const saved = await this.packetRepository.save(packet);
  
    return {
      message: 'Add new packet successfully',
      status: 'success',
      data: saved,
    };
  }  

  async getAllPackets(): Promise<Packet[]> {
    return this.packetRepository.find();
  }

  async getTotalPackets(): Promise<number> {
    return this.packetRepository.count();
  }

  async updatePacket(id: number, updateDto: Partial<CreatePacketDto>): Promise<any> {
    await this.packetRepository.update(id, updateDto);
    const updated = await this.packetRepository.findOneBy({ id });
  
    if (!updated) {
      return { message: 'Packet not found', status: 'error' };
    }
  
    return {
      message: 'Packet updated successfully',
      status: 'success',
      data: updated,
    };
  }
  
  async deletePacket(id: number): Promise<any> {
    const existing = await this.packetRepository.findOneBy({ id });
  
    if (!existing) {
      return { message: 'Packet not found', status: 'error' };
    }
  
    await this.packetRepository.delete(id);
  
    return {
      message: 'Packet deleted successfully',
      status: 'success',
      data: existing,
    };
  }  

  async getPacketByResi(resi: string): Promise<any> {
    const packet = await this.packetRepository.findOneBy({ resi });
  
    if (!packet) {
      return {
        message: `Paket dengan resi "${resi}" tidak ditemukan`,
        status: 'error',
      };
    }
  
    return {
      message: 'Detail paket berhasil ditemukan',
      status: 'success',
      data: packet,
    };
  }  

  // ✅ Connect Device to Resi
  async connectDeviceToResi(resi: string, deviceId: string): Promise<any> {
    if (!deviceId) {
      return { message: 'Device ID is required', status: 'error' };
    }

    const packet = await this.packetRepository.findOneBy({ resi });
    if (!packet) {
      return { message: `Paket dengan resi "${resi}" tidak ditemukan`, status: 'error' };
    }

    packet.device_id = deviceId;
    const updated = await this.packetRepository.save(packet);

    return {
      message: 'Device successfully connected to resi',
      status: 'success',
      data: updated,
    };
  }

  // ✅ Disconnect Device from Resi
  async disconnectDeviceFromResi(resi: string): Promise<any> {
    const packet = await this.packetRepository.findOneBy({ resi });
    if (!packet) {
      return { message: `Paket dengan resi "${resi}" tidak ditemukan`, status: 'error' };
    }

    if (!packet.device_id) {
      return { message: 'Device is not connected to this resi', status: 'error' };
    }

    packet.device_id = null;
    const updated = await this.packetRepository.save(packet);

    return {
      message: 'Device successfully disconnected from resi',
      status: 'success',
      data: updated,
    };
  }

}
