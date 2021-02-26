import { ToDo } from '../todo/todo.model';

export interface ToDoState {
  todo: ToDo[];
}

export const initializeState = (): ToDoState => {
  return { todo: Array<ToDo>() };
};