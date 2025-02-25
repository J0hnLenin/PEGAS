import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student } from './entity/student.entity';
import { Reason } from './entity/reason.entity';
import { Period } from './entity/period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Period, Reason])],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
