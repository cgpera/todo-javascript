import './styles.css';

import { Todo, TodoList } from './classes/index';

const todoList = new TodoList();
const tarea = new Todo('limpiar pieza');

console.log(tarea);