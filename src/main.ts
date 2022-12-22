import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // app.useGlobalGuards(new JwtAuthGuard(new Reflector()));
  await app.listen(3000);
}
bootstrap();
