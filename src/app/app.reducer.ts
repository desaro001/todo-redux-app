import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filtro/fitro.actions';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';


export interface AppState {
   todos: Todo[];
   filtro: filtrosValidos;
}

/* aqui le indico que el map va a implementar la interface AppState que tiene que
tratar sus 2 atributos */
export const appReducers: ActionReducerMap<AppState> = {
      todos: todoReducer,
      filtro: filtroReducer
};
