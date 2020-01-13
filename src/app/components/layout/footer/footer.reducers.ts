import {handleActions} from 'redux-actions';
import {FooterActions} from './footer.actions';

const initialState: any = [];

export const footerReducer = handleActions(
  {
    [FooterActions.Type.OPEN_TODO_FORM]: (state: any, action: any) => {
      return state;
    }
  },
  initialState
)
