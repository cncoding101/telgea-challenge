import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type BillingReportDocument = HydratedDocument<BillingReport>;

@Schema({ timestamps: true })
export class BillingReport {
  @Prop({ required: true })
  telgea_user_id!: string;

  @Prop({ required: true })
  msisdn!: string;

  @Prop({
    type: {
      total_mb: { type: Number },
      roaming_mb: { type: Number },
      country: { type: String },
      network_type: { type: String },
      provider_code: { type: String },
    },
    required: false,
  })
  usage_data?: {
    total_mb: number;
    roaming_mb: number;
    country: string;
    network_type: string;
    provider_code: string;
  };

  @Prop([
    {
      message_id: { type: String },
      timestamp: { type: Date },
      amount: { type: Number },
      currency: { type: String },
    },
  ])
  sms_charges?: {
    message_id: string;
    timestamp: Date;
    amount: number;
    currency: string;
  }[];

  @Prop({
    type: {
      start: { type: Date },
      end: { type: Date },
    },
    required: false,
  })
  billing_period?: {
    start: Date;
    end: Date;
  };
}

export const BillingReportSchema = SchemaFactory.createForClass(BillingReport);
