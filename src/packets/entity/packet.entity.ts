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
}
