import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionGroupModule } from '../question-group/question-group.module';
import { dataSource } from '../../config/database';
import { DataSource } from 'typeorm';

@Module({
  imports: [QuestionGroupModule],
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
