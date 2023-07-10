import express from "express";

export function patchById(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        data: "PATCH to users by id",
        meta: {},
    });
}