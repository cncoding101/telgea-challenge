import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsISO31661Alpha2,
  IsDateString,
  IsIn,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class DataUsageDto {
  @IsNumber()
  @IsPositive()
  total_mb!: number;

  @IsNumber()
  @IsPositive()
  roaming_mb!: number;

  @IsString()
  @IsISO31661Alpha2()
  country!: string;
}

class UsagePeriodDto {
  @IsDateString()
  start!: string;

  @IsDateString()
  end!: string;
}

class UsageDto {
  @ValidateNested()
  @Type(() => DataUsageDto)
  data!: DataUsageDto;

  @ValidateNested()
  @Type(() => UsagePeriodDto)
  period!: UsagePeriodDto;
}

class NetworkDto {
  @IsString()
  @IsIn(['2G', '3G', '4G', '5G', 'LTE', 'NR'])
  type!: string;

  @IsString()
  @IsNotEmpty()
  provider_code!: string;
}

export class CreateUsagePayloadDto {
  @IsString()
  @IsNotEmpty()
  user_id!: string;

  @IsString()
  @IsNotEmpty()
  msisdn!: string;

  @ValidateNested()
  @Type(() => UsageDto)
  usage!: UsageDto;

  @ValidateNested()
  @Type(() => NetworkDto)
  network!: NetworkDto;
}
