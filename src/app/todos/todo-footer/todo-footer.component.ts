import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos, setFiltro } from '../../filtro/fitro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number = 0;
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['completados', 'pendientes', 'todos'];

  constructor(private store: Store<AppState> ) { }

  ngOnInit(): void {
    /*this.store.select('filtro').subscribe(filtro => {
      this.filtroActual = filtro;
    }); */
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todoElem => !todoElem.completado).length;
    });
  }

  cambiarFiltro( filtro: filtrosValidos){
    this.store.dispatch(setFiltro( {filtro} ));
  }

  limpiarCompletados( ){
    this.store.dispatch(limpiarCompletados({}));
  }

}
