import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Aktifkan CORS
  app.enableCors({
    origin: `https://alarm-tag.vercel.app/`, // sesuaikan dengan domain frontend kamu
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Alarm API')
    .setDescription('Dokumentasi API untuk sistem Alarm dan Resi Tracking')
    .setVersion('1.0')
    .addTag('alarm')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
