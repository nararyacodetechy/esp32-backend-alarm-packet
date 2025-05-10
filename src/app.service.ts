import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '🚀 Backend aktif! Akses dokumentasi API di https://alarm-tag.vercel.app/';
  }
}
