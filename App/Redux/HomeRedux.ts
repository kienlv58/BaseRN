import { createAction, createActionTypeOnSuccess, UnfoldSagaActionType } from 'redux-unfold-saga';
import { produce } from 'immer';

export const REDUX_KEY = 'Home';
export enum ActionTypes {
  GET_HOME_DATA = 'GET_HOME_DATA',
}

export const Actions = {
  getHomeData: createAction(ActionTypes.GET_HOME_DATA),
};

export interface HomeState {
  data: {};
}

export const defaultState: HomeState = {
  data: {},
};

export const reducer = (state = defaultState, action: UnfoldSagaActionType): HomeState => {
  const { type, payload } = action;
  return produce(state, (draftState: HomeState) => {
    switch (type) {
      case createActionTypeOnSuccess(ActionTypes.GET_HOME_DATA):
        draftState.data = payload;
        break;
    }
  });
};
