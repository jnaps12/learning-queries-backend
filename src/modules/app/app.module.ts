import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionGroupModule } from '../question-group/question-group.module';
import { dataSource, dbConfig } from '../../config/database';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from '../question/question.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CredentialModule } from '../credential/credential.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
    CredentialModule,
    AuthModule,
    QuestionGroupModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DataSource,
      useFactory: async () => {
        await dataSource.initialize();
        return dataSource;
      },
    },
  ],
})
export class AppModule {}
