import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ type: String, required: true })
  @IsOptional()
  @IsString({message: 'Name is Required'})
  name?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  contact?: string;

  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @IsNumber()
  age?: number

}
