import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './fitro.actions';

export const initialState: filtrosValidos = 'todos';

const filtroCreducer = createReducer(
  initialState,
  on(setFiltro, (state, {filtro}) => filtro),

);

export function filtroReducer(state, action) {
  return filtroCreducer(state, action);
}
