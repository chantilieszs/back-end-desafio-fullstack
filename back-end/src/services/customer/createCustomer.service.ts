import { iCustomerRequest, iCustomerResponse } from "../../interfaces/customers";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entities";
import { AppError } from "../../errors/AppError";
import { customerWithoutPasswordSchema } from "../../schemas/customer.schemas";

const createCustomerService = async (
  customer: iCustomerRequest
): Promise<iCustomerResponse> => {
  const userRepository = AppDataSource.getRepository(Customer);

  const findPhone: Customer = await userRepository.findOneBy({
    phone: customer.phone,
  });

  if (findPhone) {
    throw new AppError("There is already a contact with this phone", 403);
  }
  const findEmail: Customer = await userRepository.findOneBy({
    email: customer.email,
  });

  if (findEmail) {
    throw new AppError("There is already a contact with this email", 403);
  }

  const createCustomer = userRepository.create(customer);

  await userRepository.save(createCustomer);

  const customerWithoutPassword = await customerWithoutPasswordSchema.validate(
    createCustomer,
    {
      stripUnknown: true,
    }
  );

  return customerWithoutPassword;
};

export default createCustomerService;
