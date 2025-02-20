import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Achievement } from '../achievement/achievement.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Achievement, (achievement) => achievement.user)
  achievements: Achievement[];
}