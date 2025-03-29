import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';
import { User } from './user.entity';
import {Permission} from './permission.entity';
@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => User, user => user.roles)
  users: User[];

  @ManyToMany(() => Role, role => role.users)
  @JoinTable({
      name: 'roles_permissions',
      joinColumn: { name: 'role_id', referencedColumnName: 'id' },
      inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' },
  })
  permissions: Permission[];

}