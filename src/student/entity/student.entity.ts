import { OneToMany, ManyToOne, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Reason } from "./reason.entity";
import { Period } from "./period.entity";
import { Achievement } from "../../achievementTwo/entity/achievement.entity";
import { Statement } from "../../statement/entity/statement.entity";

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
 
  // достижения 
  @OneToMany(() => Achievement, (achievement) => achievement.student)
  achievements: Achievement[];

  // заявления 
  @OneToMany(() => Statement, (statement) => statement.student)
  statements: Statement[];

}

