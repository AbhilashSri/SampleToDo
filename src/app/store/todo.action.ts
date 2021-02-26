  
import { createAction, props } from '@ngrx/store';
import { ToDo } from '../todo/todo.model';

export const addTodo = createAction(
  'Add ToDo',
  props<ToDo>()
);

export const GetToDo = createAction('Get ToDo');