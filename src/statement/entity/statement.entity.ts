import { ManyToOne, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Status } from "./status.entity";
import { Achievement } from "../../achievementTwo/entity/achievement.entity";
import { Student } from "../../student/entity/student.entity";
import { Contest } from "../../contest/entity/contest.entity";

@Entity()
export class Statement {
  @PrimaryGeneratedColumn()
  id: number; 
  
  // студент
  @ManyToOne(() => Student, (student) => student.statements)
  student: Student;
  
  // конкурс
  @ManyToOne(() => Contest, (contest) => contest.statements)
  contest: Contest;

  // статус
  @ManyToOne(() => Status, (status) => status.statements)
  status: Status;
  
  // дата подачи
  @CreateDateColumn()
  date: Date;

}

