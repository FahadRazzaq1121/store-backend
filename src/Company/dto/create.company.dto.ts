import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString({ message: 'Company Name is Required' })
  name: string;
}
