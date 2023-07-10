import express from "express";

export function post(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(201).json({
        data: "POST to users",
        meta: {},
    });
}