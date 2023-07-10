import { NextFunction } from "express";
import { CustomError } from "./error";

export interface CustomNext extends NextFunction {
    (err?: CustomError): void;
}
