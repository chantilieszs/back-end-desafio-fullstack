import listCustomerService from "../../services/customer/listCustomer.service";
import { Request, Response } from "express";

const retrieveUserController = async (req: Request, res: Response) => {
  const customer = await listCustomerService(req.user);
  
  return res.status(200).json(customer);
};

export default retrieveUserController;
