import { OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from "./student.entity";

// основание поступления
@Entity()
export class Reason {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  reason: string; 
  
  @OneToMany(() => Student, (student) => student.reason)
  students: Student[];
}

  
