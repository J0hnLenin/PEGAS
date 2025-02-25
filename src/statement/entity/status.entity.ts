import { OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Statement } from "./statement.entity";

// статус
@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number; 
  
  @Column()
  status: string;

  @OneToMany(() => Statement, (statement) => statement.status)
  statements: Statement[];

}

