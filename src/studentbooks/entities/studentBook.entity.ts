import {Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
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

  @ManyToOne(() => User, (user) => user.id)
    user: User;

  @ManyToOne(() => Admission, (admission) => admission.id)
  admission: Admission;

  @ManyToOne(() => Curriculum, (curriculum) => curriculum.id)
  curriculum: Curriculum;

  @ManyToOne(() => Department, (department) => department.id)
  department: Department;

  @ManyToOne(() => AcademicDegree, (academic) => academic.id)
  academicDegree: AcademicDegree;

  @ManyToOne(() => FormOfEducation, (form) => form.id)
  formOfEducation: FormOfEducation;

  @ManyToOne(() => BudgetLevel, (budget) => budget.id)
  budgetLevel: BudgetLevel;

}
