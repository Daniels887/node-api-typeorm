import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '@models/User';

class SessionController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);

    const { username, password } = req.body;

    const user = await repository.findOne({ where: { username } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

    return res.json({
      user: {
        id: user.id,
        username: user.username,
      },
      token,
    });
  }
}

export default new SessionController();
