import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Customer } from "../entities/customer.entities";
import { AppError } from "../errors/AppError";
import { EntityTarget } from "typeorm";
import { Contact } from "../entities/contact.entities";

const ensureItIsExistMiddleware =
  (entity: EntityTarget<Customer | Contact>) =>
    async (req: Request, res: Response, next: NextFunction) => {
      const entityRepository = AppDataSource.getRepository(entity);

      if (entity == Customer) {
        const find: Customer | Contact = await entityRepository.findOneBy({
          id: req.user.id,
        });

        if (!find) {
          throw new AppError("Not found", 404);
        }

        return next();
      } else if (entity == Contact) {
        console.log(req.params.id);
        const find: Customer | Contact = await entityRepository.findOneBy({
          id: req.params.id,
        });

        if (!find) {
          throw new AppError("Not found", 404);
        }

        return next();
      }
      return next();
    };

export default ensureItIsExistMiddleware;
