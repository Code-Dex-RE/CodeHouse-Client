import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../stores/store';
import { RootState } from '../stores/rootReducer';
import { loginAction, LoginPayload } from '../stores/Slice/users';

// 커스텀 훅
export default function useUser() {
  const { isLogIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.user);

  const login = useCallback((data: any) => {
    dispatch(loginAction(data));
  }, []);

  //   const logout = useCallback(() => {
  //     dispatch(logoutAction());
  //   }, []);

  return { isLogIn, login, userData };
}
