import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '🚀 Backend aktif! Akses dokumentasi API di http://localhost:3000/';
  }
}
