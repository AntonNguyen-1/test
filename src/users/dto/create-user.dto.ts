import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @Matches(/^\+?\d{10,15}$/, {
    message: 'Wrong phone number format',
  })
  phone: string;
}
