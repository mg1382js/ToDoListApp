import {Routes} from "../RouterRepository/index.js";
export class RouterHandler {
    constructor(ResponseHandler, Validate, TodoController) {
        this.ResponseHandler = ResponseHandler;
        this.Validate = Validate;
        this.TodoController = TodoController;
    }

    setup(req, res) {
        this.#CheckUrlAndMethod(req, res)
        this.Validate.ValidateNotEmptyAndCheckSchema(req, res, () => {
            //run controller
            try {
                let handler = 'this.' + Routes[req.method][req.url].handler;
                this.#callMethodByString(handler,req,res)
            }catch (error){
                this.ResponseHandler.SendDataMeta(error.message,error.statusCode,res)
            }
        })
    }

    #callMethodByString(handler,req,res) {
        // Remove 'this.' prefix
        let data ={}
        const inputData = Routes[req.method][req.url].schema
        inputData.forEach((element)=>{
            data[element] = req.body[element]
        })
        const methodParts = handler.split('.');
        if (methodParts[0] === 'this') {
            // Get the class name from 'this'
            const classObject = this[methodParts[1]];
            // Get the method name
            const methodName = methodParts[2];
            if (classObject && typeof classObject[methodName] === 'function') {
                 classObject[methodName](data,res); // Call the method
            } else {
                this.ResponseHandler.SendDataMeta('Method not found',400,res);
            }
        } else {
            this.ResponseHandler.SendDataMeta('Invalid method string',400,res);
        }
    }
    #CheckUrl(Url, HttpMethod) {
        return Object.keys(Routes[HttpMethod]).includes(Url)
    }

    #CheckHttpMethod(HttpMethod) {
        return Object.keys(Routes).includes(HttpMethod)
    }

    #CheckUrlAndMethod(req, res) {
        const isUrl = this.#CheckUrl(req.url, req.method.toUpperCase())
        const isHttpMethod = this.#CheckHttpMethod(req.method.toUpperCase())
        if (!isHttpMethod) this.ResponseHandler.SendDataMeta('HTTP Method is undefined', 400, res)
        if (!isUrl) this.ResponseHandler.SendDataMeta('url Not Found', 404, res)
    }


}