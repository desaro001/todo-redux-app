import { createReducer, on } from '@ngrx/store';
import { crear, toogle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('Recoger ls piedras del rio Oros'),
  new Todo('unirse a Tolves'),
];
/* aqui para toogle usamos el metodo map que DEVUELVE OTRO ARRAY DISTINTO sin manipular
el state oiginal, con ...todo le indico que devuleva todo el objeto y con
completado: !todo.completado le indico que cuando sea el id del item le cambie la propiedad
al valor contrario al que tenía */
const todoCreducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(borrar, (state, {id}) => state.filter( todo => todo.id !== id)),
  on(limpiarCompletados, (state ) => state.filter( todo => !todo.completado)),
  on(toogle, (state, { id }) => {
    return state.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else { return todo; }
    });
  }),

  on(toggleAll, (state, { completado } ) => {
    return state.map((todo) => {
              return {
          ...todo,
          // tslint:disable-next-line: object-literal-shorthand
          completado: completado,
        };
      });
  }),

  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          // tslint:disable-next-line: object-literal-shorthand
          texto: texto
        };
      } else { return todo; }
    });
  })
);

export function todoReducer(state, action) {
  return todoCreducer(state, action);
}
