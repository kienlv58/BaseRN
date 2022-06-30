import {combineReducers} from '@reduxjs/toolkit';

import sessionReducer from './sessionSlice';
import globalReducer from './globalSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalReducer,
});

export default rootReducer;
