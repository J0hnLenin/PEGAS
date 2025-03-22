import {Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany} from 'typeorm';
import {Application} from "../../applications/entities/application.entity";

@Entity('competitions')
export class Competition {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column({type: "json"})
    details: JSON; //toDo нужно уточнить схему где-то


    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Application, (Application) => Application.competition)
    applications: Application[];






}