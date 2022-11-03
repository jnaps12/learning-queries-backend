import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CredentialService } from './credential.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { IsPublic } from '../../decorators/is-public';

@Controller('credential')
export class CredentialController {
  constructor(private readonly credentialService: CredentialService) {}

  @Post()
  @IsPublic()
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialService.create(createCredentialDto);
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.credentialService.findById(id);
  }
}
