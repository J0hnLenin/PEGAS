import { OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Contest } from "./contest.entity";

// организация
@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number; 
  
  @Column()
  organization: string;

  @OneToMany(() => Contest, (contest) => contest.organizations)
  contests: Contest[];

}

