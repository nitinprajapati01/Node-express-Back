import express from "express";

export function deleteById(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        data: "DELETE to users by id",
        meta: {},
    });
}