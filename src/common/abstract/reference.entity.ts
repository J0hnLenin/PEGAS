import { PrimaryGeneratedColumn, Column} from 'typeorm';

export abstract class ReferenceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}