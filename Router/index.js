export class Router {
    constructor(routerHandler, routerError) {
        this.routerHandler = routerHandler;

    }

    setup(req, res) {
        this.routerHandler.setup(req, res);
    }
}