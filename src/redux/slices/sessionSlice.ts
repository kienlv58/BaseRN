import {createSlice, PayloadAction} from '@reduxjs/toolkit';

/* ----DEFINE_ACTION_REDUCER----*/
type User = {
  name: string;
  age: number;
};

interface SessionData {
  user: User | null;
}

const initialState: SessionData = {
  user: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const {setCurrentUser, logout} = sessionSlice.actions;

export default sessionSlice.reducer;
