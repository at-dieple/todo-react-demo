import { createAction } from 'redux-actions';

export namespace FooterActions {
  export enum Type {
    OPEN_TODO_FORM = 'OPEN_TODO_FORM'
  }
  export const openTodoForm = createAction<any>(Type.OPEN_TODO_FORM);
}

export type FooterActions = Omit<typeof FooterActions, 'Type'>;
