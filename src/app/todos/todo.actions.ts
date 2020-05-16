import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] crea todo',
  props<{ texto: string }>()
);

/* la accion toogle si esta a false lo pasa a true y viceversa */
export const toogle = createAction(
  '[TODO] toogle',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] editar',
  props<{ id: number, texto: string }>()
);

export const borrar = createAction(
  '[TODO] borrar',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] toggleAll',
  props<{ completado: boolean}>()
);

export const limpiarCompletados = createAction(
  '[TODO] limpiarCompletados',
  props<{ }>()
);


