import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as users } from './Users/Users.slice';

const reducers = combineReducers({
	users: users,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
