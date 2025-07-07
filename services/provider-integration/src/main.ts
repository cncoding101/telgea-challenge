import { NestFactory } from '@nestjs/core';
import { ProviderIntegrationModule } from './provider-integration.module';

async function bootstrap() {
  const app = await NestFactory.create(ProviderIntegrationModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
