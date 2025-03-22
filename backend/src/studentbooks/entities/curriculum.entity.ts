import {Entity} from "typeorm";
import {ReferenceEntity} from "../../common/abstract/reference.entity";

@Entity('curriculums')
export class Curriculum extends ReferenceEntity {

}