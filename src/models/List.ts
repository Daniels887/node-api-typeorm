import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany
} from 'typeorm';
import Todo from './Todo';
import User from './User';

@Entity('lists')
export class List {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @OneToMany(() => Todo, list => List)
  todos: Todo[]

  @ManyToOne(() => User, lists => List, { eager: true })
  user: User
}

export default List;
