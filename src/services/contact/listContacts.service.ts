import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";

const listContactService = async (customerId) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact[] = await contactRepository
    .createQueryBuilder("contact")
    .where("contact.customer = :customerId", { customerId: customerId.id })
    .getMany();

  return contact;
};

export default listContactService;
