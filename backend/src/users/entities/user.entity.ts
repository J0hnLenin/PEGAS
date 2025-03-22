import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import {StudentBook} from '../../studentbooks/entities/studentBook.entity'
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  is_active: boolean;

  @Column()
  passwordHash: string;

  @OneToMany(() => StudentBook, (studentBook) => studentBook.user)
  student_books: StudentBook;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.passwordHash) {
      const salt = await bcrypt.genSalt(10);
      this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
    }
  }
}