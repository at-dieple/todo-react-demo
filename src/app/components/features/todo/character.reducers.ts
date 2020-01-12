import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers/state';
import { CharacterActions } from './character.actions';
import { CharacterModel } from 'app/models';

const initialState: RootState.PageState = [];

export const characterReducer = handleActions<RootState.PageState, CharacterModel>(
  {
    [CharacterActions.Type.TODO_LIST]: (state, action: any) => {
      return [...state, ...action.payload];
    },
    [CharacterActions.Type.TODO_NEW]: (state, action) => {
      state = action.payload ? [action.payload, ...state] : state;
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    },
    [CharacterActions.Type.TODO_UPDATE]: (state, action: any) => {
      state = state.map((item) => (item.id === action.payload.id ? action.payload : item));
      console.log(state);
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    },
    [CharacterActions.Type.TODO_DELETE]: (state, action) => {
      state = state.filter((item: CharacterModel) => item.id !== (action.payload as any));
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    }
  },
  initialState
);
