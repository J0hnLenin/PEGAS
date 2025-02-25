import { OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Achievement } from "./achievement.entity";

// тип достижения
@Entity()
export class TypeAchievement {
  @PrimaryGeneratedColumn()
  id: number; 
  
  @Column()
  typeAchievement: string;

  @OneToMany(() => Achievement, (achievement) => achievement.typeAchievement)
  achievements: Achievement[];

}

