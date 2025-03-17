import {ReferenceEntity} from "../../common/abstract/reference.entity";
import {Entity} from "typeorm";

@Entity('categories')
export class Category extends ReferenceEntity {

}