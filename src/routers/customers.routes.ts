import { Router } from "express";
import createCustomerController from "../controllers/customer/createCustomer.controller";
import deleteCustomerController from "../controllers/customer/deleteCustomer.controller";
import listCustomerController from "../controllers/customer/listCustomer.controller";
import updateUserController from "../controllers/customer/updateCustomer.controller";
import { Customer } from "../entities/customer.entities";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import {
  ensureDataIsValidMiddleware,
  ensureUpdateDataIsValidMiddleware,
} from "../middlewares/ensureDataIsValid.middlewares";
import { customerSchema, customerUpdateSchema } from "../schemas/customer.schemas";

const customerRoutes: Router = Router();

customerRoutes.post(
  "",
  ensureDataIsValidMiddleware(customerSchema),
  createCustomerController
);

customerRoutes.get(
  "",
  ensureAuthMiddleware,
  listCustomerController
);

customerRoutes.patch(
  "",
  ensureAuthMiddleware,
  ensureUpdateDataIsValidMiddleware(customerUpdateSchema),
  updateUserController
);

customerRoutes.delete("", ensureAuthMiddleware, deleteCustomerController);

export default customerRoutes;
