import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString({message: 'Name is Required'})
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsNotEmpty()
  @IsNumber()
  age: number

  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message: 'Password too weak. Must contain at least 8 characters, 1 uppercase letter, 1 special character, and 1 number.',
  })
  password: string;
}
