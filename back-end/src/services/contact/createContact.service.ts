import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { iContactRequest } from "../../interfaces/contacts";
import { contactResponseSchema } from "../../schemas/contact.schemas";

const createContactService = async (
  body: iContactRequest,
  customerId: any
): Promise<iContactRequest> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const newContact: Contact = contactRepository.create({
    ...body,
    customer: customerId,
  });

  await contactRepository.save(newContact);

  return await contactResponseSchema.validate(newContact, {
    stripUnknown: true,
  });
};

export default createContactService;
