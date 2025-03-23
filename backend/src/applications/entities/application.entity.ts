import {Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, ManyToOne, JoinTable} from 'typeorm';
import {Achievement} from "../../achievements/entities/achievement.entity";
import {StudentBook} from "../../studentbooks/entities/studentBook.entity";
import {Competition} from "../../competition/entities/comptetion.entity";
import {Status} from "../../achievements/entities/status.entity";

@Entity('applications')
export class Application {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Competition)
    competition: Competition;

    @ManyToOne(() => StudentBook, { nullable: false })
    studentBook: StudentBook;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Status, { nullable: false, eager: true })
    status: Status;

    @ManyToMany(() => Achievement)
    @JoinTable()
    achievements: Achievement[];

}