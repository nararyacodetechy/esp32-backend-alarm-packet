import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePacketDto {
  @IsString()
  @IsNotEmpty({ message: 'Nomor resi tidak boleh kosong' })
  @Length(5, 30, { message: 'Nomor resi minimal 5 karakter dan maksimal 30 karakter' })
  resi: string;

  @IsString()
  @IsNotEmpty({ message: 'Nama pemesan tidak boleh kosong' })
  @Length(2, 50, { message: 'Nama pemesan minimal 2 karakter dan maksimal 50 karakter' })
  customer_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Alamat tidak boleh kosong' })
  @Length(5, 100, { message: 'Alamat minimal 5 karakter dan maksimal 100 karakter' })
  address: string;

  @IsString()
  @IsNotEmpty({ message: 'Pesanan tidak boleh kosong' })
  @Length(3, 100, { message: 'Pesanan minimal 3 karakter dan maksimal 100 karakter' })
  order: string;
}
