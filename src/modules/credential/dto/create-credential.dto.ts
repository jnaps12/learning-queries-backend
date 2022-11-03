import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCredentialDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
