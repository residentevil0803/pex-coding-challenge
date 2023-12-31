import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppBootstrapManager } from './app-bootstrap.manager';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  AppBootstrapManager.setAppDefaults(app);

  await app.listen(3001);
}
bootstrap();
