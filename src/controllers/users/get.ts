import express from "express";

export function get(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        data: "GET to users",
        meta: {},
    });
}