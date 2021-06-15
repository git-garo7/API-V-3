import { request, Request, response, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListuserService from '../services/ListUserService';

export default class UsersController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listUser = new ListuserService();

        const users = await listUser.execute();

        return response.json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        return response.json(user);
    }
}
