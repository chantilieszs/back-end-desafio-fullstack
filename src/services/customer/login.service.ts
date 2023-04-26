import { compareSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
import { Customer } from "../../entities/customer.entities";
import { iCustomerLogin } from "../../interfaces/customers";

const loginService = async (
  userData: iCustomerLogin
): Promise<{ token: string }> => {
  const findCustomer: Customer = await AppDataSource.getRepository(Customer).findOneBy({
    email: userData.email,
  });

  if (!findCustomer) {
    throw new AppError("wrong email or password", 404);
  }

  const passwordMatch: boolean = compareSync(userData.password, findCustomer.password);

  if (!passwordMatch) {
    throw new AppError("wrong email or password", 404);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: findCustomer.id,
    
  });

  return { token };
};

export default loginService;
