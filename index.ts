import {BrokerType} from 'mercury-messenger';
import Mercury from "mercury-messenger";
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';

import './testeHandler'
import "./TestController";

let merc = new Mercury(BrokerType.RABBITMQ, 'localhost', 'guest', 'guest', 'testApp', 'testService',60);
merc.init()

let container = new Container();
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);