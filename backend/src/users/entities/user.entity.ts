import {  Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { Role } from './role.entity';
import {StudentBook} from '../../studentbooks/entities/studentBook.entity'
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({default: true})
  is_active: boolean;

  @Exclude()
  @Column()
  password: string;

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
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password= await bcrypt.hash(this.password, salt);
    }
  }
}