import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wifi } from './entity/wifi.entity';
import { WifiService } from './wifi.service';
import { WifiController } from './wifi.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Wifi])],
  providers: [WifiService],
  exports: [WifiService],
  controllers: [WifiController],
})
export class WifiModule {}
