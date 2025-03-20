import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AcademicDegree} from "./entities/academicDegree.entity";
import {Admission} from "./entities/admission.entity";
import {Curriculum} from "./entities/curriculum.entity";
import {Department} from "./entities/department.entity";
import {StudentBook} from "./entities/studentBook.entity";
import {BudgetLevel} from "./entities/budgetLevel.entity";

import {FormOfEducation} from "./entities/formOfEducation.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AcademicDegree, Admission, Curriculum, Department, StudentBook,
 BudgetLevel, FormOfEducation])],

})
export class StudentBooksModule {}