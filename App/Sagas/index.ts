import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import home from './HomeSaga';

export default function* rootSaga(): SagaIterator {
  yield all([call(home)]);
}
