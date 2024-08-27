export class TodoController {
    constructor(ResponseHandler, TodoModel,uuid) {
        this.ResponseHandler = ResponseHandler;
        this.TodoModel = TodoModel;
        this.uuid = uuid
    }

    async Create(data, res) {
        try {
            const todos = await this.TodoModel.getAllTodo()
            const id = this.uuid.generateUUID()
            todos[id] = data
            await this.TodoModel.saveTodo(todos)
            this.ResponseHandler.SendDataMeta(data, 200, res)
        } catch (error) {
            throw error
        }
    }

}