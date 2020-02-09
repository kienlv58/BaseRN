import { combineReducers } from 'redux';
import { REDUX_KEY as HomeKey, reducer as HomeReducer, defaultState as homeDefaultState, HomeState } from './HomeRedux';

export interface RootState {
  [HomeKey]: HomeState;
}
export const RootStateDefault: RootState = {
  [HomeKey]: homeDefaultState,
};

export default combineReducers<RootState>({
  [HomeKey]: HomeReducer,
});
