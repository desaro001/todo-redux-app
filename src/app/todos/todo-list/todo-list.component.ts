import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from '../../filtro/fitro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }
/* ahora me subscribo al estate que tiene 2 propiedades, el array de todos[] y el
filtro, entonces al inicio del componente aplico el filtro al state */
  ngOnInit(): void {
    /*this.store.select('todos').
    subscribe( todosArray => this.todos = todosArray );*/
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    } );
  }

}
