import {Routes} from "../../Router/RouterRepository/index.js";

export class Validate {
    constructor(parse, ResponseHandler) {
        this.parse = parse;
        this.ResponseHandler = ResponseHandler;
    }

    ValidateNotEmptyAndCheckSchema(req, res, next) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            const resultSchemaValues = Object.values(Routes[req.method][req.url].schema)
            const bodyKeys = Object.keys(parsedBody);
            const areKeysMatching = bodyKeys.length === resultSchemaValues.length && resultSchemaValues.every(key => resultSchemaValues.includes(key));
            if (!areKeysMatching) {
                this.ResponseHandler.SendDataMeta(`This field or fields is required => / ${resultSchemaValues} / and the rest are extra, please delete the rest of the fields `, 404, res)
                return;
            }
            for (const key in parsedBody) {
                if (parsedBody[key] === '') {
                    this.ResponseHandler.SendDataMeta({error: `${key} نباید خالی باشد`}, 400, res)
                    return;
                }
            }
            req.body = parsedBody;
            next();
        });
    }

}