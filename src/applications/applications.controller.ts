import {Controller, Get, Query} from "@nestjs/common";
import {ApplicationsService} from "./applications.service";
import {Application} from "./entities/application.entity";

@Controller('applications')

export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}

    @Get('')
    async getApplicationsWithAchievementCount(
        @Query('limit') limit: string,
        @Query('offset') offset: string,
    ): Promise<{ application: Application}[]> {
        const limitNumber = limit ? parseInt(limit, 10) : 10;
        const offsetNumber = offset ? parseInt(offset, 10) : 0;
        return this.applicationsService.getApplicationsWithAchievementCount(limitNumber, offsetNumber);
    }
}