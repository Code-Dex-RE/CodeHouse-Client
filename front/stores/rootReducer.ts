import { combineReducers } from 'redux';
import user from '../stores/Slice/users';

const rootReducer = combineReducers({ user });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
