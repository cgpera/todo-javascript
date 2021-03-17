import './styles.css';

import { Todo, TodoList } from './classes'; // por default importa el index.js, que contiene todas las clases
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.forEach(todo => crearTodoHtml(todo));
console.log(todoList.todos);