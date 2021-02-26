import { ToDo } from './todo.model';
import { ToDoState } from './../store/todo.state';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as ToDoActions from './../store/todo.action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription = new Subscription;
  ToDoList: ToDo[] = [];

  constructor(private store: Store<{ todos: ToDoState }>) {
    this.todo$ = this.store.pipe(select('todos'));
  }

  addTodo(title: string, isComp: boolean) {
    console.log(title);
    console.log(isComp);
    const todo: ToDo = { Title: title, IsCompleted: isComp };

    this.store.dispatch(ToDoActions.addTodo(todo));
  }

  ngOnInit() {
    this.ToDoSubscription = this.todo$
      .pipe(
        map(x => {
          this.ToDoList = x.todo;
        })
      )
      .subscribe();

      this.store.dispatch(ToDoActions.GetToDo());
  }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }

}