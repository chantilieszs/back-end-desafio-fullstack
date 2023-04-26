import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entities";
import { iCustomerResponse } from "../../interfaces/customers";
import { customerWithoutPasswordSchema } from "../../schemas/customer.schemas";

const listCustomerService = async (
  customer
): Promise<iCustomerResponse> => {
  const userRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

  const findCustomer: Customer = await userRepository.findOneBy({
    id: customer.id,
  });

  const validatedUser: iCustomerResponse = await customerWithoutPasswordSchema.validate(
    findCustomer,
    {
      stripUnknown: true,
    }
  );

  return validatedUser;
};

export default listCustomerService;
