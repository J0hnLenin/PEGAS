import {ReferenceEntity} from "../../common/abstract/reference.entity";
import {Entity, ManyToMany} from "typeorm";
import {Role} from "./role.entity";

@Entity('permission')
export class Permission extends ReferenceEntity {
    @ManyToMany(() => Role, role => role.permissions)
    roles: Role[];
}