import {
  Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany
} from 'typeorm';
import bcrypt from 'bcryptjs';
import List from './List';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  username: string

  @Column()
  password: string

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @OneToMany(() => List, user => User)
  lists: List[]
}

export default User;
