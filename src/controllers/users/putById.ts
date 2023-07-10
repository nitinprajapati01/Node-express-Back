import express from "express";

export function putById(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        data: "PUT to users by id",
        meta: {},
    });
}