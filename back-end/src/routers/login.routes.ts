import { Router } from "express";
import { loginController } from "../controllers/customer/login.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { customerLoginSchema } from "../schemas/customer.schemas";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  ensureDataIsValidMiddleware(customerLoginSchema),
  loginController
);

export default loginRouter;
