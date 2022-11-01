import {
  BeforeUpdate,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Column, CreateDateColumn } from 'typeorm';
import { QuestionEntity } from '../../question/entities/question.entity';

@Entity('question_group')
export class QuestionGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'icon_url', type: 'text' })
  iconUrl: string;

  @OneToMany(() => QuestionEntity, (question) => question.questionGroup, {
    cascade: true,
  })
  question: QuestionEntity[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at',
  })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
