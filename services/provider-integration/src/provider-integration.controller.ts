import { Controller, Get } from '@nestjs/common';
import { ProviderIntegrationService } from './provider-integration.service';

@Controller()
export class ProviderIntegrationController {
  constructor(private readonly providerIntegrationService: ProviderIntegrationService) {}

  @Get()
  getHello(): string {
    return this.providerIntegrationService.getHello();
  }
}
