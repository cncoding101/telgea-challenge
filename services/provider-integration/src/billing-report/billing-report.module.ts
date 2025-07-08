import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BillingReportController } from './billing-report.controller';
import { BillingReportService } from './billing-report.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BillingReport,
  BillingReportSchema,
} from './schema/billing-report.schema';
import { XmlBodyParserMiddleware } from './middleware/body-parser-xml';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BillingReport.name, schema: BillingReportSchema },
    ]),
  ],
  controllers: [BillingReportController],
  providers: [BillingReportService],
})
export class BillingReportModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(XmlBodyParserMiddleware).forRoutes('billing-report/sms');
  }
}
