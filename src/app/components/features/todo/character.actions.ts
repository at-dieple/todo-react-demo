import { createAction } from 'redux-actions';
import { CharacterModel } from 'app/models';

export namespace CharacterActions {
  export enum Type {
    TODO_LIST = 'TODO_LIST',
    TODO_NEW = 'TODO_NEW',
    TODO_UPDATE = 'TODO_UPDATE',
    TODO_DELETE = 'TODO_DELETE'
  }
  export const listTodo = createAction<any>(Type.TODO_LIST);
  export const newTodo = createAction<CharacterModel>(Type.TODO_NEW);
  export const updateTodo = createAction<CharacterModel>(Type.TODO_UPDATE);
  export const deleteTodo = createAction<CharacterModel['id']>(Type.TODO_DELETE);
}

export type CharacterActions = Omit<typeof CharacterActions, 'Type'>;
