import * as yup from "yup";
import { SchemaOf } from "yup";
import { iContactRequest, iContactResponse } from "../interfaces/contacts";

const contactRequestSchema: SchemaOf<iContactRequest> = yup.object().shape({
  name: yup.string().required("Name required"),
  email: yup.string().email().notRequired().nullable(),
  phone: yup.string().required("Phone required"),
});

const contactResponseSchema: SchemaOf<iContactResponse> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required("Name required"),
  email: yup.string().email().notRequired().nullable(),
  phone: yup.string().required("Phone required"),
  registered: yup.date(),
});

export { contactRequestSchema, contactResponseSchema };
