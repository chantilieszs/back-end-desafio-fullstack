import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Customer } from "./customer.entities";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column({ length: 120 })
  name: string;

  @Column({ length: 70, nullable: true })
  email: string;

  @Column({ length: 15, unique: true })
  phone: string;

  @CreateDateColumn()
  registered: Date;

  @ManyToOne(() => Customer, (customer) => customer.contact, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinTable()
  customer: Customer;
}

export { Contact };
