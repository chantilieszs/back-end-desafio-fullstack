import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { iContactResponse, iContactUpdateRequest } from "../../interfaces/contacts";
import { contactResponseSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  contactData: iContactUpdateRequest,
  contactId: string
): Promise<iContactResponse> => {
  console.log(contactData);
  console.log(contactId);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactFind: Contact = await contactRepository.findOneBy({
    id: contactId,
  });
  const contact: Contact = await contactRepository.save({
    ...contactFind,
    ...contactData,
  });

  return await contactResponseSchema.validate(contact, { stripUnknown: true });
};

export default updateContactService;
