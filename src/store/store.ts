import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as countPlayers } from './count-players/CountPlayers.slice';
import { reducer as users } from './users/Users.slice';

const reducers = combineReducers({
	users: users,
	countPlayers: countPlayers,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
