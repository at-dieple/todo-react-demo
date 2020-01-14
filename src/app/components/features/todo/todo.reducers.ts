import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers/state';
import { CharacterActions } from './todo.actions';
import { TodoModel } from 'app/models';

const initialState: RootState.PageState = [];

export const todoReducer = handleActions<RootState.PageState, TodoModel>(
  {
    [CharacterActions.Type.TODO_LIST]: (state, action: any) => {
      return [...action.payload];
    },
    [CharacterActions.Type.TODO_NEW]: (state, action) => {
      state = action.payload ? [action.payload, ...state] : state;
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    },
    [CharacterActions.Type.TODO_UPDATE]: (state, action: any) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          action.payload.completed = !action.payload.completed;
          return action.payload;
        } else {
          return item;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    },
    [CharacterActions.Type.TODO_DELETE]: (state, action) => {
      state = state.filter((item: TodoModel) => item.id !== (action.payload as any));
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    }
  },
  initialState
);
