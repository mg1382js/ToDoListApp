export class ResponseHandler {
    SendDataMeta(Message,StatusCode,Response){
        const data = {
            message: Message
        }
        const meta = {
            timestamp: Date.now()
        }
        Response.statusCode = StatusCode;
        Response.setHeader('Content-Type', 'text/plain');
        Response.end(JSON.stringify({data: data, meta: meta}))
    }
}