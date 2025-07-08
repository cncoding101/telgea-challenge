import { Model } from 'mongoose';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  convertRestToInternalFormat,
  convertSoapToInternalFormat,
} from '../utils/helpers/converter';
import { BillingReport } from './schema/billing-report.schema';
import { CreateUsagePayloadDto } from './dto/usage.dto';

@Injectable()
export class BillingReportService {
  private readonly logger = new Logger(BillingReportService.name);

  constructor(
    @InjectModel(BillingReport.name)
    private model: Model<BillingReport>,
  ) {}

  async upsertSmsCharges(xml: string) {
    try {
      const parsed = convertSoapToInternalFormat(xml);

      await this.model.updateOne(
        { telgea_user_id: parsed.telgea_user_id },
        parsed,
        { upsert: true },
      );
    } catch (error) {
      this.logger.error('Failed to merge SMS charge', error);
      throw new InternalServerErrorException('Could not update SMS charges');
    }
  }

  async upsertUsage(payload: CreateUsagePayloadDto) {
    try {
      const parsed = convertRestToInternalFormat(payload);

      await this.model.updateOne(
        { telgea_user_id: parsed.telgea_user_id },
        parsed,
        { upsert: true },
      );
    } catch (error) {
      this.logger.error('Failed to merge usage', error);
      throw new InternalServerErrorException('Could not update Usage for user');
    }
  }
}
