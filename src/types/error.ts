import { StatusCodes } from "http-status-codes";
import { unknownError } from "../lang/common/errors";
 
export class CustomError extends Error {
    code!: StatusCodes;
    message!: string;

    constructor({ code = StatusCodes.INTERNAL_SERVER_ERROR, message = unknownError }) {
        super();

        this.code = code;
        this.message = message;
    }
}
