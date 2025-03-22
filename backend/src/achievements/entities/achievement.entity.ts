import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, CreateDateColumn} from 'typeorm';
import {Category} from "./category.entity";
import {Status} from "./status.entity";
import {Application} from "../../applications/entities/application.entity";

@Entity('achievements')
export class Achievement {

    //user id нужен?

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    date_of_award: Date;

    @Column({type: "json"})
    details: JSON;


    @ManyToOne(() => Category, { nullable: false })
    category: Category;


    @ManyToMany(() => Application, application => application.achievements)
    applications: Application[];

    @CreateDateColumn()
    created_at: Date;

    //ToDo type_of_achievement
}