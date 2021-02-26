import { ToDo } from './../todo/todo.model';
import { Action, createReducer, on } from '@ngrx/store';
import { ToDoState, initializeState } from './../store/todo.state';
import * as ToDoActions from './todo.action';

export const initialState = initializeState();
const _addToDoReducer = createReducer(
    initialState,
    on(ToDoActions.GetToDo, state => state),
    on(ToDoActions.addTodo, (state: ToDoState, todo: ToDo) => {
        return { ...state, ToDos: [...state.todo, todo], ToDoError: null };
    })
);


export function addToDoReducer(state: ToDoState, action: Action) {
    return _addToDoReducer(state, action);
}