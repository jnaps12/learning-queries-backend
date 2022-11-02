import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCredentialDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
