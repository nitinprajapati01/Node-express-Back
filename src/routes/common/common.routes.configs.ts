import express from "express";

export abstract class CommonRoutesConfigs {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;

        this.configureRoutes();
    }

    abstract configureRoutes(): express.Application;

    getName() {
        return this.name;
    }
}