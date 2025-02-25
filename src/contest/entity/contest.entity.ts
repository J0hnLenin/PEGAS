import { ManyToOne, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Organization } from "./organization.entity";

@Entity()
export class Contest {
  @PrimaryGeneratedColumn()
  id: number; 
  
  // организация
  @ManyToOne(() => Organization, (organization) => organization.contests)
  organizations: Organization;
  
  // дата старт
  @CreateDateColumn()
  startDate: Date;
  
  // дата окончания
  @CreateDateColumn()
  finishDate: Date;

  // направления
  @Column()
  directions: string;
  
}

