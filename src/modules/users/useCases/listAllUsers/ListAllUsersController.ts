import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      console.log("os users são: ", users);
      return response.json(users);
    } catch(err) {
      console.log(err);
      return response.status(400).json({error: true});
    }
  }
}

export { ListAllUsersController };
