import { Request, Response } from "express";
import deleteCustomerService from "../../services/customer/deleteCustomer.service";

const deleteCustomerController = async (req: Request, res: Response) => {

  await deleteCustomerService(req.user);

  return res.status(204).json({})
};

export default deleteCustomerController;
