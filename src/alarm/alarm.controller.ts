import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('alarm')
@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post(':resi/on')
  @ApiOperation({ summary: 'Nyalakan alarm untuk resi tertentu' })
  @ApiResponse({ status: 200, description: 'Alarm ON', type: Object })
  turnOn(@Param('resi') resi: string): any {
    return this.alarmService.turnOn(resi);
  }

  @Post(':resi/off')
  @ApiOperation({ summary: 'Matikan alarm untuk resi tertentu' })
  @ApiResponse({ status: 200, description: 'Alarm OFF', type: Object })
  turnOff(@Param('resi') resi: string): any {
    return this.alarmService.turnOff(resi);
  }

  @Post(':resi/reset')
  @ApiOperation({ summary: 'Reset alarm untuk resi tertentu' })
  reset(@Param('resi') resi: string): string {
    return this.alarmService.reset(resi);
  }
}
