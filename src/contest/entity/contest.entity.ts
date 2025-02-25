import { OneToMany, ManyToOne, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Organization } from "./organization.entity";
import { Statement } from "../../statement/entity/statement.entity";

@Entity()
export class Contest {
  @PrimaryGeneratedColumn()
  id: number; 
  
  // организация
  @ManyToOne(() => Organization, (organization) => organization.contests)
  organization: Organization;
  
  // дата старт
  @CreateDateColumn()
  startDate: Date;
  
  // дата окончания
  @CreateDateColumn()
  finishDate: Date;

  // направления
  @Column()
  directions: string;
  
  @OneToMany(() => Statement, (statement) => statement.contest)
  statements: Statement[];

}

