import { get } from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from 'App/Redux';
import { GlobalState, REDUX_KEY } from 'App/Redux/GlobalRedux';

export const selectGlobal = (state: RootState): GlobalState => get(state, REDUX_KEY);

export const selectGlobalLoading = createSelector(
  selectGlobal,
  (gloabalState: GlobalState): any => gloabalState.isLoading,
);

export default {
  selectGlobal,
};
