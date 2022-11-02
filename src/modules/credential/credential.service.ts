import { Injectable } from '@nestjs/common';
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
    await user.save();

    delete user.password;
    return user;
  }

  async findById(id: number) {
    return await this.credentialRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.credentialRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
