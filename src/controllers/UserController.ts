import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '@models/User';

class UserController {

  async store(req: Request, res: Response) {
    const repository = getRepository(User);

    const {
      username, password,
    } = req.body;

    const userExists = await repository.findOne({ where: [{ username }]});

    if (userExists) {
      return res.status(409).json({ error: 'Username or email already in use' });
    }

    const user = repository.create({
      username, password
    });

    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();
