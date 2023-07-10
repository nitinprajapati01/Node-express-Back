import * as winston from "winston";
import * as expressWinston from "express-winston";

export const requestLoggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint()
    )
}
// if(process.env.NODE_ENV === "production") {
    // requestLoggerOptions.meta = false;
// }


export const errorLoggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint()
    )
}
