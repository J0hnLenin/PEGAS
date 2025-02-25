import { OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from "./student.entity";

// периоды контроля
@Entity()
export class Period {
  @PrimaryGeneratedColumn()
  id: number; 
  
  @Column()
  period: string;

  @OneToMany(() => Student, (student) => student.period)
  students: Student[];

}

