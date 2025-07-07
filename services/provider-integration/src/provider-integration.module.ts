import { Module } from '@nestjs/common';
import { ProviderIntegrationController } from './provider-integration.controller';
import { ProviderIntegrationService } from './provider-integration.service';

@Module({
  imports: [],
  controllers: [ProviderIntegrationController],
  providers: [ProviderIntegrationService],
})
export class ProviderIntegrationModule {}
