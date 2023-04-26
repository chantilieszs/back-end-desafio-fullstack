import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entities";
import { iCustomerResponse, iCustomerUpdate } from "../../interfaces/customers";
import { customerWithoutPasswordSchema } from "../../schemas/customer.schemas";

const updateCustomerService = async (
  body: iCustomerUpdate,
  customerId: any
): Promise<iCustomerResponse> => {
  const userRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

  const findCustomer: Customer = await userRepository.findOneBy({ id: customerId.id });

  const user: Customer = await userRepository.save({
    ...findCustomer,
    ...body,
  });  
  return await customerWithoutPasswordSchema.validate(user, { stripUnknown: true });
};

export default updateCustomerService;
