import {DIContainer} from "../DiContainer/index.js";
// import {DIContainer} from "@mahdi.golzar/dicontainer"
import {Bootstrap} from "../../Bootstrap/index.js";
import {Logger} from "../../Utilities/Logger/index.js";
import http from 'http';
import {parse} from 'querystring'
import {HttpService} from "../../Services/HttpService/index.js";
import {Router} from "../../Router/index.js";
import {RouterHandler} from "../../Router/RouterHandler/index.js";
import {ResponseHandler} from "../../Utilities/ResponseHandler/index.js";
import {Validate} from "../../Middleware/Validate/index.js";
import {TodoController} from "../../Controllers/TodoController/index.js";
import {TodoModel} from "../../Models/TodoModel/index.js";
import {uuid} from "../../Utilities/uuid/index.js";

const Container = new DIContainer()

//register
Container.Register('http', [], () => http, false);
Container.Register('parse', [], () => parse, false);
Container.Register('uuid', [], uuid);
Container.Register('Logger', [], Logger);
Container.Register('ResponseHandler', [], ResponseHandler)
Container.Register('TodoModel', [], TodoModel)
Container.Register('TodoController', ['ResponseHandler', 'TodoModel','uuid'], TodoController)
Container.Register('Validate', ['parse', 'ResponseHandler'], Validate);
Container.Register('RouterHandler', ['ResponseHandler', 'Validate', 'TodoController'], RouterHandler);
Container.Register('Router', ['RouterHandler'], Router);
Container.Register('HttpService', ['http', 'Logger', 'Router'], HttpService);
Container.Register('Bootstrap', ['HttpService'], Bootstrap);
export const bootstrap = Container.Get('Bootstrap');
