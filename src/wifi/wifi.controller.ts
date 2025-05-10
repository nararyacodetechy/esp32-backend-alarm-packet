// src/wifi/wifi.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { WifiService } from './wifi.service';
import { RegisterWifiDto } from './dto/register-wifi.dto';

@Controller('wifi')
export class WifiController {
  constructor(private readonly wifiService: WifiService) {}

  @Post('register')
  register(@Body() body: RegisterWifiDto) {
    return this.wifiService.register(body);
  }
}
