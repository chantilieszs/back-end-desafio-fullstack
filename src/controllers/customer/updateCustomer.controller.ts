import { Request, Response } from "express";
import updateUserService from "../../services/customer/updateCustomer.service";

const updateCustomerController = async (req: Request, res: Response) => {
  const user = await updateUserService(req.body, req.user);
  return res.json(user);
};

export default updateCustomerController;
