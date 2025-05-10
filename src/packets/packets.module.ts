import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packet } from './entity/packet.entity';
import { PacketsService } from './packets.service';
import { PacketsController } from './packets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Packet])],
  providers: [PacketsService],
  exports: [PacketsService], // Untuk diexport ke module lain
  controllers: [PacketsController],
})
export class PacketsModule {}
