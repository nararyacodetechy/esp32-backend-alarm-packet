// src/wifi/wifi.service.ts
import { Injectable } from '@nestjs/common';
import { RegisterWifiDto } from './dto/register-wifi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wifi } from './entity/wifi.entity';

@Injectable()
export class WifiService {
  constructor(
    @InjectRepository(Wifi)
    private readonly wifiRepo: Repository<Wifi>,
  ) {}

  async register(data: RegisterWifiDto) {
    const newWifi = this.wifiRepo.create(data);
    const saved = await this.wifiRepo.save(newWifi);

    return {
      message: 'WiFi registered successfully',
      status: 'success',
      data: saved,
    };
  }
}
