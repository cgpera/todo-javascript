import './styles.css';

import { Todo, TodoList } from './classes'; // por default importa el index.js, que contiene todas las clases

const todoList = new TodoList();
const tarea = new Todo('Aprender NodeJS');

todoList.nuevoTodo(tarea);

console.log(todoList);