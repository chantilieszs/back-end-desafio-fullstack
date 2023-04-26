import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  console.log(authorization);
  
  if (!authorization) {
    throw new AppError('no token sent', 401);
  }

  const token: string = authorization.split(' ')[1];

  return jwt.verify(
    token,
    process.env.SECRET_KEY,
    (err: jwt.VerifyErrors, decoded: jwt.JwtPayload) => {
      if (err) {
        throw new AppError(err.message, 401);
      }

      req.user = {
        id: decoded.sub
      };

      return next();
    },
  );
};

export default ensureAuthMiddleware;
