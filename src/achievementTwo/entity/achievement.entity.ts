import { ManyToOne, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { TypeAchievement } from "./typeAchievement.entity";
import { Category  } from "./category.entity";
import { Student } from "../../student/entity/student.entity";

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn()
  id: number; 
  
  // дата
  @CreateDateColumn()
  date: Date;
  
  // категория
  @ManyToOne(() => Category, (category) => category.achievements)
  category: Category;
  
  // тип достижения
  @ManyToOne(() => TypeAchievement, (typeAchievements) => typeAchievements.achievements)
  typeAchievement: Achievement;
  
  // уровень
  @Column()
  level: number;
  
  // студент
  @ManyToOne(() => Student, (student) => student.achievements)
  student: Student;
}

