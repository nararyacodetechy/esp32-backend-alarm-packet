import { Injectable } from '@nestjs/common';

@Injectable()
export class AlarmService {
  private alarms: Record<string, boolean> = {}; // key = resi, value = status alarm
  private packets: Record<string, any> = {}; // key = resi, value = informasi paket (misalnya nama alat, lokasi)

  // Menambahkan informasi paket
  registerPacket(resi: string, packetInfo: any): void {
    this.packets[resi] = packetInfo;
  }

  turnOn(resi: string): any {
    this.alarms[resi] = true;
    const packetInfo = this.packets[resi];
    console.log(`Alarm ON for Resi ${resi}`);

    return {
      message: `Alarm ON for Resi ${resi}`,
      status: 'success',
      data: {
        resi,
        packetInfo,  // Menambahkan informasi paket saat alarm dinyalakan
      },
    };
  }

  turnOff(resi: string): any {
    this.alarms[resi] = false;
    const packetInfo = this.packets[resi];
    console.log(`Alarm OFF for Resi ${resi}`);

    return {
      message: `Alarm OFF for Resi ${resi}`,
      status: 'success',
      data: {
        resi,
        packetInfo,  // Menambahkan informasi paket saat alarm dimatikan
      },
    };
  }

  reset(resi: string): any {
    delete this.alarms[resi];  // Menghapus status alarm untuk resi
    console.log(`Alarm reset for Resi ${resi}`);
  
    return {
      status: 'inactive',  // Status alarm setelah reset
      resi,
      message: `Alarm is reset for Resi ${resi}`,  // Pesan untuk menunjukkan alarm telah direset
    };
  }  
}
