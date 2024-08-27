import {FsDatabase} from "../../Database/LocalDatabase/index.js";

export class TodoModel extends FsDatabase {
    constructor() {
        super();
    }

    async saveTodo(todo) {
        try {
            await super.Create(todo);
        }catch (error){
            throw `Error: ${error}`;
        }
    }
    async getAllTodo(){
        try {
            return await super.Read();
        }catch (error){
            throw `Error: ${error}`;
        }
    }

}