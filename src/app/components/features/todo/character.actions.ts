import { createAction } from 'redux-actions';
import { CharacterModel } from 'app/models';

export namespace CharacterActions {
  export enum Type {
    TODO_LIST = 'TODO_LIST',
    TODO_NEW = 'TODO_NEW',
    CHARACTER_UPDATE = 'CHARACTER_UPDATE',
    CHARACTER_DELETE = 'CHARACTER_DELETE'
  }
  export const listTodo = createAction<any>(Type.TODO_LIST);
  export const newTodo = createAction<CharacterModel>(Type.TODO_NEW);
  export const updateCharacter = createAction<CharacterModel>(Type.CHARACTER_UPDATE);
  export const deleteCharacter = createAction<CharacterModel['id']>(Type.CHARACTER_DELETE);
}

export type CharacterActions = Omit<typeof CharacterActions, 'Type'>;
