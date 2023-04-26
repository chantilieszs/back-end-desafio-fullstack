export interface iContactRequest {
    name:string;
    email?:string;
    phone:string;
}
  
export interface iContactResponse extends iContactRequest{
    id:string;
    registered:Date;
}
 
export interface iContactUpdateRequest {
    name?:string;
    email?:string;
    phone?:string;
}