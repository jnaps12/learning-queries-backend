import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentEntity } from '../../student/entities/student.entity';
import { QuestionEntity } from '../../question/entities/question.entity';

@Entity('solved-question')
export class SolvedQuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ name: 'student_id', type: 'int' })
  studentId: number;

  @PrimaryColumn({ name: 'question_id', type: 'int' })
  questionId: number;

  @OneToOne(() => StudentEntity)
  @JoinTable()
  student: StudentEntity;

  @OneToOne(() => QuestionEntity)
  @JoinTable()
  question: QuestionEntity;

  @Column()
  attempts: number;

  @Column({ type: 'timestamp' })
  started_at: Date;

  @Column({ type: 'timestamp' })
  done_at: Date;
}
