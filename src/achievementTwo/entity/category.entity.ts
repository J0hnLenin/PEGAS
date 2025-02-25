import { OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Achievement } from "./achievement.entity";

// тип достижения
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number; 
  
  @Column()
  category: string;

  @OneToMany(() => Achievement, (achievement) => achievement.category)
  achievements: Achievement[];

}
