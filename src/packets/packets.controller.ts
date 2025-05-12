import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { Packet } from './entity/packet.entity';
import { CreatePacketDto } from './dto/create-packet.dto';

@Controller('packets')
export class PacketsController {
  constructor(private readonly packetService: PacketsService) {}

  @Post()
  async addPacket(@Body() packetDto: CreatePacketDto) {
    return this.packetService.addPacket(packetDto);
  }

  @Get()
  async getAllPackets(): Promise<Packet[]> {
    return this.packetService.getAllPackets();
  }

  @Get('/total')
  async getTotalPackets(): Promise<{ total: number }> {
    const total = await this.packetService.getTotalPackets();
    return { total };
  }

  // ✅ EDIT / UPDATE packet
  @Put(':id')
  async updatePacket(@Param('id') id: number, @Body() updateDto: Partial<CreatePacketDto>) {
    return this.packetService.updatePacket(id, updateDto);
  }

  // ✅ DELETE packet
  @Delete(':id')
  async deletePacket(@Param('id') id: number) {
    return this.packetService.deletePacket(id);
  }

  @Get(':resi')
  async getPacketByResi(@Param('resi') resi: string) {
    return this.packetService.getPacketByResi(resi);
  }

  // ✅ Connect Device
  @Put(':resi/connect')
  async connectDevice(
    @Param('resi') resi: string,
    @Body() body: { device_id: string }
  ) {
    const { device_id } = body;
    return this.packetService.connectDeviceToResi(resi, device_id);
  }

  // ✅ Disconnect Device
  @Put(':resi/disconnect')
  async disconnectDevice(@Param('resi') resi: string) {
    return this.packetService.disconnectDeviceFromResi(resi);
  }

}
