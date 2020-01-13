import { combineReducers } from 'redux';
import { RootState } from './state';
import { featureReducer } from 'app/components/features/feature.reducers';
import { alertReducer } from 'app/components/shared/alert/alert.reducers';
import { footerReducer} from 'app/components/layout/footer/footer.reducers';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  ...featureReducer,
  ...{ notification: alertReducer },
  ...footerReducer
});
