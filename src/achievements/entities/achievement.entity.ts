import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Category} from "./category.entity";
import {Status} from "./status.entity";

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


    @ManyToOne(() => Category)
    category: Category;

    @ManyToOne(() => Status)
    status: Status;

    //ToDO обновить сущность исходя из новых потребностей
    //ManyToMany applications
    //ToDo type_of_achievement
}