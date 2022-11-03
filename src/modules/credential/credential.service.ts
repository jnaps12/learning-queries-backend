import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { CredentialEntity } from './entities/credential.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CredentialService {
  constructor(
    @InjectRepository(CredentialEntity)
    private readonly credentialRepository: Repository<CredentialEntity>,
  ) {}

  async create(createCredentialDto: CreateCredentialDto) {
    const user = await this.credentialRepository.create(createCredentialDto);

    if (await this.findByEmail(user.email)) {
      throw new BadRequestException('User Already exists.');
    }
    await user.save();

    delete user.password;
    return user;
  }

  async findById(id: number) {
    const credential = await this.credentialRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!credential) {
      throw new NotFoundException(
        credential,
        `Credential with id ${id} not found.`,
      );
    }

    delete credential.password;
    return credential;
  }

  async findByEmail(email: string) {
    return await this.credentialRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
