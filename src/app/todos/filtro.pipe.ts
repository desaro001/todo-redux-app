import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/fitro.actions';

/* este pipe va a recibir un arreglo de objetos de la clase todo y un type arrays
con los filtros validos y va a devolver un arreglo de Todos */
@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todo: Todo[], filtro: filtrosValidos): Todo[] {
    switch ( filtro ) {
      case 'completados':
        return todo.filter(todoItem => todoItem.completado);
      case 'pendientes':
        return todo.filter(todoItem => !todoItem.completado);
      case 'todos':
        return todo.filter(todoItem => todoItem);
    }
  }

}
