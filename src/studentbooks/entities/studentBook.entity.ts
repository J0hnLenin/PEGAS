import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm';
import {User} from "../../users/entities/user.entity";
import {AcademicDegree} from "./academicDegree.entity";
import {Admission} from "./admission.entity";
import {Curriculum} from "./curriculum.entity";
import {Department} from "./department.entity";
import {FormOfEducation} from "./formOfEducation.entity";
import {BudgetLevel} from "./budgetLevel.entity";


@Entity('studentBooks')
export class StudentBook{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User,  { nullable: false })
    user: User;

  @Column()
    course: string;

  @Column()
  is_active: boolean;

  @ManyToOne(() => Admission,  { nullable: false })
  admission: Admission;

  @ManyToOne(() => Curriculum,  { nullable: false })
  curriculum: Curriculum;

  @ManyToOne(() => Department,  { nullable: false })
  department: Department;

  @ManyToOne(() => AcademicDegree,  { nullable: false })
  academicDegree: AcademicDegree;

  @ManyToOne(() => FormOfEducation,  { nullable: false })
  formOfEducation: FormOfEducation;

  @ManyToOne(() => BudgetLevel,  { nullable: false })
  budgetLevel: BudgetLevel;


}
