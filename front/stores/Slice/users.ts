import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  isLogIn: boolean;
  userData: any;
};

export type LoginPayload = {
  name: string;
  email: string;
};

const initialState: UserState = {
  isLogIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginAction(state: UserState, action: PayloadAction<LoginPayload>) {
      state.isLogIn = true;
      state.userData = action.payload;
    },
    // logoutAction(state: UserState) {
    //   state.isLogIn = false;
    //   state.userData = null;
    // },
  },
});

const { reducer, actions } = userSlice;
export const { loginAction } = actions;
export default reducer;
