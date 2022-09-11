import { createAction, props } from '@ngrx/store';
import { Todo } from './index';

export const incrementVersion = createAction(
  '[Child1] Increment Version'
);

export const updateData = createAction(
  '[Child1] Update Data',
  props<{ name: string; version: string; todos: Todo[] }>()
);