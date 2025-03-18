import {Entity} from "typeorm";
import {ReferenceEntity} from "../../common/abstract/reference.entity";

@Entity('departments')
export class Department extends ReferenceEntity {

}