import { get } from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from 'App/Redux';
import { HomeState, REDUX_KEY } from 'App/Redux/HomeRedux';

export const selectHome = (state: RootState): HomeState => get(state, REDUX_KEY);

export const selectHomeData = createSelector(selectHome, (homeState: HomeState): any => homeState.data);

export default {
  selectHomeData,
};
