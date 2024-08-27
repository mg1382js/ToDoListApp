export class Bootstrap {
    constructor(HttpService, ExceptionHandler) {
        this.HttpService = HttpService
        this.ExceptionHandler = ExceptionHandler
    }

    Start(Port, HostName) {
            this.HttpService.createServer(Port, HostName)
    }
}