import {Entity} from "typeorm";
import {ReferenceEntity} from "../../common/abstract/reference.entity";

@Entity('budget_level')
export class BudgetLevel extends ReferenceEntity {

}