import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controller";
import listContactController from "../controllers/contact/listContact.controller";
import updateContactController from "../controllers/contact/updateContact.controller";
import { Contact } from "../entities/contact.entities";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import { ensureDataIsValidMiddleware, ensureUpdateDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { contactRequestSchema } from "../schemas/contact.schemas";

const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactRequestSchema),
  createContactController
);
contactRoutes.get("", ensureAuthMiddleware, listContactController);

contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUpdateDataIsValidMiddleware(contactRequestSchema),
  updateContactController
);

contactRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  deleteContactController
);

export default contactRoutes;
