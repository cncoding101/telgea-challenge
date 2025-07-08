import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BillingReportModule } from './billing-report/billing-report.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/providerdb'), UserModule, BillingReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
