import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderIntegrationService {
  getHello(): string {
    return 'Hello World!';
  }
}
