import * as express from 'express'
import { IReqUser } from '../../interfaces/customers'

declare global{
    namespace Express{
        interface Request {
            user: IReqTokenUser
        }
    }
}