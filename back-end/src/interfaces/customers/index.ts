export interface iCustomerRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface iCustomer {
  name: string;
  email: string;
  password: string;
  phone: string;
  registered: Date;
}

export interface iCustomerResponse {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  registered?: Date;
}

export interface iCustomerLogin {
  email: string;
  password: string;
}

export interface iCustomerUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}