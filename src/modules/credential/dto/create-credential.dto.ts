import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCredentialDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
