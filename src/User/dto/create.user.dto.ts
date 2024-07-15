import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString({message: 'Name is Required'})
  name: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString()
  contact: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsNumber()
  age?: number

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message: 'Password too weak. Must contain at least 8 characters, 1 uppercase letter, 1 special character, and 1 number.',
  })
  password: string;
}
