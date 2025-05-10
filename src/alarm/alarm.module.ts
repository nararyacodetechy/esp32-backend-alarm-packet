import { Module } from '@nestjs/common';
import { AlarmController } from './alarm.controller';
import { AlarmService } from './alarm.service';

@Module({
  providers: [AlarmService], // <-- ini penting
  exports: [AlarmService], // <-- opsional, hanya kalau service-nya dipakai di module lain
  controllers: [AlarmController],
})
export class AlarmModule {}
