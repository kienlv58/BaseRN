import { combineReducers } from 'redux';
import { REDUX_KEY as HomeKey, reducer as HomeReducer, defaultState as homeDefaultState, HomeState } from './HomeRedux';
import {
  REDUX_KEY as GlobalKey,
  reducer as GlobalReducer,
  defaultState as globalDefaultState,
  GlobalState,
} from './GlobalRedux';

export interface RootState {
  [HomeKey]: HomeState;
  [GlobalKey]: GlobalState;
}
export const RootStateDefault: RootState = {
  [HomeKey]: homeDefaultState,
  [GlobalKey]: globalDefaultState,
};

export default combineReducers<RootState>({
  [HomeKey]: HomeReducer,
  [GlobalKey]: GlobalReducer,
});
