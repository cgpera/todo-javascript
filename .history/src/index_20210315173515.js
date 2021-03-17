import './styles.css';

import { Todo, TodoList } from './classes'; // por default importa el index.js, que contiene todas las clases

const todoList = new TodoList();
const tarea = new Todo('limpiar pieza');
const tarea2 = new Todo('Aprender NodeJS');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);