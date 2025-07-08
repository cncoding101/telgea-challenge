import { BillingReport } from '../../billing-report/schema/billing-report.schema';

const convertRestToInternalFormat = (payload: any): BillingReport => {
  return {
    telgea_user_id: payload.user_id,
    msisdn: payload.msisdn,
    usage_data: {
      total_mb: payload.usage.data.total_mb,
      roaming_mb: payload.usage.data.roaming_mb,
      country: payload.usage.data.country,
      network_type: payload.network.type,
      provider_code: payload.network.provider_code,
    },
    billing_period: {
      start: payload.usage.period.start,
      end: payload.usage.period.end,
    },
  };
};

export { convertSoapToInternalFormat, convertRestToInternalFormat };
