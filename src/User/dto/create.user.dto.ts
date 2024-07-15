import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({message: 'Name is Required'})
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  contact: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  age?: number

  @ApiProperty({description:' Password must contain at least 8 characters, 1 uppercase letter, 1 special character, and 1 number.'})
  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message: 'Password too weak. Must contain at least 8 characters, 1 uppercase letter, 1 special character, and 1 number.',
  })
  password: string;
}
