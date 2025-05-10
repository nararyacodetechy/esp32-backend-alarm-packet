import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacketsModule } from './packets/packets.module'; // Misalnya ada module untuk Packet
import { PacketsController } from './packets/packets.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WifiController } from './wifi/wifi.controller';
import { WifiModule } from './wifi/wifi.module';
import { AlarmModule } from './alarm/alarm.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db', // Nama file database SQLite
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Menentukan entitas yang ada
      synchronize: true, // Otomatis sinkronisasi database (hati-hati di production)
    }),
    PacketsModule,
    AlarmModule,
    WifiModule,
  ],
  controllers: [AppController, PacketsController, WifiController],
  providers: [AppService],
})
export class AppModule {}
