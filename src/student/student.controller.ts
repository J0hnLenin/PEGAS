import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from "./entity/student.entity";

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

}
