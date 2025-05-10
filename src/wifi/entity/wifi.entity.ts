// src/wifi/entity/wifi.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wifi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ssid: string;

  @Column()
  password: string;

  @Column()
  location: string;
}
