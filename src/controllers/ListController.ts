import { Request, Response } from "express";
import { getRepository } from "typeorm";
import List from "@models/List";
import User from "@models/User";

class ListController {
  async store(req: Request, res: Response) {
    const repository = getRepository(List);

    const { userId, name, description } = req.body;

    const list = repository.create({
      user: userId,
      name,
      description,
    });

    await repository.save(list);

    return res.json(list);
  }

  async show(req: Request, res: Response) {
    const repository = getRepository(List);
    const userRopository = getRepository(User);

    const currentUser = await userRopository.findOne({
      where: {
        id: req.params.user_id,
      },
    });

    if (!currentUser) {
      return res.status(400).json({ error: "User not found" });
    }

    const lists = await repository.find({
      select: ["name", "description", "id"],
      where: {
        user: req.params.user_id,
      },
      order: {
        id: "DESC",
      },
    });

    return res.json(lists);
  }

  async update(req: Request, res: Response) {
    const repository = getRepository(List);

    const currentList = await repository.findOne({
      where: { id: req.params.id },
    });

    if (!currentList) {
      return res.status(400).json({ error: "List not found" });
    }

    const { name, description } = req.body;

    currentList.name = name;
    currentList.description = description;

    const updatedList = await repository.save(currentList);

    return res.json({
      id: updatedList.id,
      name: updatedList.name,
      description: updatedList.description,
    });
  }

  async delete(req: Request, res: Response) {
    const repository = getRepository(List);

    const currentList = await repository.findOne({
      where: { id: req.params.id },
    });

    await repository.delete(currentList);

    return res.json({ message: "List deleted" });
  }
}

export default new ListController();
