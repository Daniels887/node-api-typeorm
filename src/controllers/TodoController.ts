import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Todo from '@models/Todo';
import List from '@models/List';

class TodoController {
  async store(req: Request, res: Response) {
    const todoRepository = getRepository(Todo);
    const listRepository = getRepository(List);

    const {
      listId, name, description,
    } = req.body;

    const list = await listRepository.findOne({ where: {
      id: listId
    }})

    if(!list) {
      return res.status(400).json({ error: 'List not found' })
    }

    const todo = todoRepository.create({
      list: listId, name, description, completed: false
    });

    await todoRepository.save(todo);

    return res.json(todo);
  }

  async show(req: Request, res: Response) {
    const repository = getRepository(Todo);

    const todos = await repository.find({
      select: ['name', 'description', 'completed', 'id'],
      where: { list: req.params.list_id }
    });

    return res.json(todos);
  }

  async update(req: Request, res: Response) {
    const repository = getRepository(Todo);

    const currentTodo = await repository.findOne({ where: { id: req.params.id }});

    if(!currentTodo) {
      return res.status(400).json({ error: 'Todo not found' });
    };

    const { name, description, completed } = req.body;

    currentTodo.name = name;
    currentTodo.description = description;
    currentTodo.completed = completed;

    const updatedTodo = await repository.save(currentTodo);

    return res.json({
      id: updatedTodo.id,
      name: updatedTodo.name,
      description: updatedTodo.description,
      completed: updatedTodo.completed,
    });
  }

  async delete(req: Request, res: Response) {
    const repository = getRepository(Todo);

    const currentTodo = await repository.findOne({ where: { id: req.params.id }});

    await repository.delete(currentTodo);

    return res.json({ message: 'Todo deleted' });
  }
}

export default new TodoController();
