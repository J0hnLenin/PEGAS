import {Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, ManyToOne, JoinTable} from 'typeorm';
import {Achievement} from "../../achievements/entities/achievement.entity";
import {StudentBook} from "../../studentbooks/entities/studentBook.entity";
import {Competition} from "../../competition/entities/comptetion.entity";

@Entity('applications')
export class Application {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Competition)
    competition: Competition;

    @ManyToOne(() => StudentBook)
    student_book: StudentBook;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Achievement)
    @JoinTable()
    Achievements: Achievement[];

}