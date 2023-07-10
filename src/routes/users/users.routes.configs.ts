import express from "express";
import { CommonRoutesConfigs } from "../common/common.routes.configs";
import { all as allMethodsToUsers } from "../../middlewares/users/all";
import { allById as allMethodsToUsersById } from "../../middlewares/users/allById";
import { get as getToUsers } from "../../controllers/users/get";
import { getById as getToUsersById } from "../../controllers/users/getById";
import { post as postToUsers } from "../../controllers/users/post";
import { patchById as patchToUsersById } from "../../controllers/users/patchById";
import { putById as putToUsersById } from "../../controllers/users/putById";
import { deleteById as deleteToUsersById } from "../../controllers/users/deleteById";

export class UsersRoutes extends CommonRoutesConfigs {
    constructor(app: express.Application) {
        super(app, "UserRoutes");

    }

    configureRoutes(): express.Application {
        this.app.route("/users")
        // .all(allMethodsToUsers)
        .get(/* auth middlware, */ getToUsers)
        .post(/* auth middlware, */ postToUsers)
        ;

        this.app.route("/users/:userId")
        // .all(allMethodsToUsersById)
        .get(/* auth middlware, */ getToUsersById)
        .patch(/* auth middlware, */ patchToUsersById)
        .put(/* auth middlware, */ putToUsersById)
        .delete(/* auth middlware, */ deleteToUsersById)
        ;

        return this.app;
    }

}