import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AcademicDegree} from "./entities/academicDegree.entity";
import {Admission} from "./entities/admission.entity";
import {Curriculum} from "./entities/curriculum.entity";
import {Department} from "./entities/department.entity";
import {StudentBook} from "./entities/studentBook.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AcademicDegree, Admission, Curriculum, Department, StudentBook])],

})
export class StudentBooksModule {}