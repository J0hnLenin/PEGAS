import {ReferenceEntity} from "../../common/abstract/reference.entity";
import {Entity} from "typeorm";

@Entity('statuses')
export class Status extends ReferenceEntity {

}