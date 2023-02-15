import { JwtPayload } from "jsonwebtoken";
import "express-serve-static-core";

declare module "express" {
    export interface Request {
        user?: JwtPayload;
    }
}
