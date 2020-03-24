import { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { unfoldSaga, UnfoldSagaActionType } from 'redux-unfold-saga';

import { ActionTypes } from 'App/Redux/HomeRedux';
import { appApi } from 'App/Lib/fetchHelpers';
import { apiMap } from 'App/Lib/apiMap';

export function* takeGetHomeData({ callbacks, type }: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<{}> => {
        const { data } = await appApi.get(apiMap.getHomeData);
        return data;
      },
      key: type,
    },
    callbacks,
  );
}

export default function*(): SagaIterator {
  yield takeLatest(ActionTypes.GET_HOME_DATA, takeGetHomeData);
}
