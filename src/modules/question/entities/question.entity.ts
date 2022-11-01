import { BeforeUpdate, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionGroupEntity } from '../../question-group/entities/question-group.entity';

export enum Levels {
  EASY = 'EASY',
  INTERMEDIARY = 'INTERMEDIARY',
  HARD = 'HARD',
}

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  query: string;

  @Column({
    type: 'enum',
    enum: Levels,
  })
  difficulty: Levels;

  @Column({ name: 'thumb_url', type: 'text' })
  thumbUrl: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'question_group_id' })
  questionGroupId: number;

  @ManyToOne(
    () => QuestionGroupEntity,
    (questionGroup) => questionGroup.question,
  )
  @JoinColumn({ name: 'question_group_id' })
  questionGroup: QuestionGroupEntity;

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
