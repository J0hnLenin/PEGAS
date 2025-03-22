import { Controller, Get, Query} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationDTO } from './dto/application_user.dto';


@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}

    @Get()
    async getApplicationsWithAchievementCount(
        @Query('limit') limit: string,
        @Query('offset') offset: string,
    ): Promise<ApplicationDTO[]> { // Изменили тип возвращаемого значения
        const limitNumber = limit ? parseInt(limit, 10) : 10;
        const offsetNumber = offset ? parseInt(offset, 10) : 0;
        return this.applicationsService.getApplicationsWithAchievementCount(limitNumber, offsetNumber);
    }
}