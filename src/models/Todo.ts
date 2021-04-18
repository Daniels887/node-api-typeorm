import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne
} from 'typeorm';
import List from './List';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  completed: boolean

  @ManyToOne(() => List, todos => Todo, { eager: true })
  list: List
}

export default Todo;
