import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Competition } from "./entities/comptetion.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Competition])],
})
export class CompetitionModule {}