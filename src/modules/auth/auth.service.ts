import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CredentialService } from '../credential/credential.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.dto';
import { CredentialEntity } from '../credential/entities/credential.entity';

@Injectable()
export class AuthService {
  constructor(
    private credentialService: CredentialService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payLoad = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payLoad),
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<CredentialEntity> {
    const { email, password } = authLoginDto;

    const user = await this.credentialService.findByEmail(email);
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
