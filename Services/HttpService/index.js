export class HttpService {
    #port
    #hostName
    #server


    constructor(http, logger, router) {
        this.http = http;
        this.logger = logger;
        this.router = router;

    }

    createServer(port, hostName) {
        this.#port = port || 8080
        this.#hostName = hostName || '127.0.0.1'
        this.#server = this.http.createServer(this.#handlerCreateServer.bind(this));
        this.#Listen()

    }

    #handlerCreateServer(req, res) {
        this.router.setup(req, res)
    }


    #Listen() {
        this.#server.listen(this.#port, this.#hostName, this.#handlerServerListen.bind(this))
    }

    #handlerServerListen() {
        this.logger.log(`Listening on ${this.#port} ${this.#hostName}`)
    }

}