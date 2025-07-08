import { Body, Controller, Post } from '@nestjs/common';
import { BillingReportService } from './billing-report.service';
import { CreateUsagePayloadDto } from './dto/usage.dto';

@Controller('billing-report')
export class BillingReportController {
  constructor(private readonly billingReportService: BillingReportService) {}

  @Post('sms')
  createUserSmsReport(@Body() body: string) {
    return this.billingReportService.upsertSmsCharges(body);
  }

  @Post('usage')
  createUserUsageReport(@Body() body: CreateUsagePayloadDto) {
    return this.billingReportService.upsertUsage(body);
  }
}
