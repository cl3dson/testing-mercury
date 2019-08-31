import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import {handler,JSONMessage} from "mercury-messenger";

@controller("/foo")
export class TestController implements interfaces.Controller {

    @httpPost("/")
    @handler()
    public async index(req: express.Request, res: express.Response, next: express.NextFunction): Promise<JSONMessage> {
        res.status(201).send('user creation solicited');
        return new JSONMessage("create-user-command",{"name":"jonh"})
    }
}

