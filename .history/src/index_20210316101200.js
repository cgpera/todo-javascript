import './styles.css';

import { Todo, TodoList } from './classes'; // por default importa el index.js, que contiene todas las clases
import { crearTodoHtml } from './js/componentes';


const todoList = new TodoList();
const tarea = new Todo('Aprender NodeJS');

tarea.completado = true;

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);