import * as yup from "yup";
import { SchemaOf } from "yup";
import { iCustomerLogin, iCustomerRequest, iCustomerResponse } from "../interfaces/customers";

const customerLoginSchema: SchemaOf<iCustomerLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const customerWithoutPasswordSchema: SchemaOf<iCustomerResponse> = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string().required("Phone required"),
  registered: yup.date(),
});

const customerSchema: SchemaOf<iCustomerRequest> = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  password: yup.string(),
  phone: yup.string().required("Phone required"),
});

const customerUpdateSchema: SchemaOf<iCustomerRequest> = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  password: yup.string(),
  phone: yup.string(),
});

export { customerWithoutPasswordSchema, customerSchema, customerUpdateSchema, customerLoginSchema };
