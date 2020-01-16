import { createAction } from 'redux-actions';
import { TodoModel } from 'app/models';

export namespace TodoActions {
  export enum Type {
    TODO_LIST = 'TODO_LIST',
    TODO_NEW = 'TODO_NEW',
    TODO_UPDATE = 'TODO_UPDATE',
    TODO_DELETE = 'TODO_DELETE',
    TODO_CLEAR_COMPLETED = 'TODO_CLEAR_COMPLETED'
  }
  export const listTodo = createAction<any>(Type.TODO_LIST);
  export const newTodo = createAction<TodoModel>(Type.TODO_NEW);
  export const updateTodo = createAction<TodoModel>(Type.TODO_UPDATE);
  export const deleteTodo = createAction<TodoModel['id']>(Type.TODO_DELETE);
  export const clearCompleted = createAction<TodoModel>(Type.TODO_CLEAR_COMPLETED);
}

export type TodoActions = Omit<typeof TodoActions, 'Type'>;
