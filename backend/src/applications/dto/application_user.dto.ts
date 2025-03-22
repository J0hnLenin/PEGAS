import {Expose, Transform, Exclude} from "class-transformer";
import {IsNumber} from "class-validator";
import {Application} from "../entities/application.entity";
import {StudentBook} from "../../studentbooks/entities/studentBook.entity";

export class ApplicationDTO{

    @Expose()
    @IsNumber()
    id: number;

    @Expose()
    @Transform(({obj} : {obj: Application}) => {
        return obj?.studentBook?.user?.name;
    })
    user_name: string;

    @Expose()
    achievementCount: number;

    @Expose()
    created_at: Date;

    @Expose()
    @Transform(({obj} : {obj: Application}) => {
        return obj?.status?.name;
    })
    status: string;

    @Exclude()
    studentBook: StudentBook;




}