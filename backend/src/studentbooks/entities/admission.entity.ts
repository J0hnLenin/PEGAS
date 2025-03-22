import {ReferenceEntity} from "../../common/abstract/reference.entity";
import {Entity} from "typeorm";

@Entity('admissions')
export class Admission extends ReferenceEntity {

}