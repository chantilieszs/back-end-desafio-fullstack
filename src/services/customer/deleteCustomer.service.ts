import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entities";

const deleteCustomerService = async (customerId: any): Promise<void> => {
  const userRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

  const deletedUser: Customer = await userRepository.findOneBy({
    id: customerId.id,
  });

  await userRepository
    .createQueryBuilder()
    .delete()
    .from(Customer)
    .where("id = :id", { id: deletedUser.id })
    .execute();
};

export default deleteCustomerService;
