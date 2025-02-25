import { ManyToOne, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Reason } from "./reason.entity";
import { Period } from "./period.entity";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number; 
  
  // ФИО
  @Column()
  name: string;
  
  // основание поступления
  @ManyToOne(() => Reason, (reason) => reason.students)
  reason: Reason;
  
  //подазделение
  @Column() 
  subdivision: string;

  // направление
  @Column()
  direction: string;

  // курс
  @Column()
  course: number;

  // период контроля 
  @ManyToOne(() => Period, (period) => period.students)
  period: Period;
  
}

