import { Controller, Get, Query} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationDTO } from './dto/application_user.dto';
import {ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Permission } from '../decorators/permission.decorator';

@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}

    @Get()
    @Permission('get-all') // toDo декоратор для создания прав в бд настроить чтобы использовал Guards
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'offset', required: false, type: Number })
    @ApiResponse({
        status: 200,
        description: 'List of applications',
        type: [ApplicationDTO],
      })
    async getApplicationsWithAchievementCount(
        @Query('limit') limit: number,
        @Query('offset') offset: number,
    ): Promise<ApplicationDTO[]> {
        const limitNumber = limit ? limit : 10;
        const offsetNumber = offset ?  offset : 0;
        return this.applicationsService.getApplicationsWithAchievementCount(limitNumber, offsetNumber);
    }
}