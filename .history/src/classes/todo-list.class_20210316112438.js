export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {

    }

    marcarCompletado(id)  {

        for (const todo of this.todos) {
            console.log(todo.id, id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }


        }

    }

    eliminarCompletados() {

    }
}