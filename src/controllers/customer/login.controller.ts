import { Request, Response } from 'express';
import loginService from '../../services/customer/login.service';

const loginController = async (req: Request, res: Response) => {
  const token = await loginService(req.body);
  return res.status(201).json(token);
};

export { loginController };
