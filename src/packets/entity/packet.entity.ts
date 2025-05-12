import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Packet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resi: string;

  @Column()
  customer_name: string;

  @Column()
  address: string;

  @Column()
  order: string;

  @Column({ type: 'varchar', nullable: true })  // ✅ tambahkan nullable: true
  device_id: string | null;
}
