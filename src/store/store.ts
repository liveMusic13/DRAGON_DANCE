import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as CountPlayers } from './count-players/CountPlayers.slice';
import { reducer as users } from './users/Users.slice';

const reducers = combineReducers({
	users: users,
	CountPlayers: CountPlayers,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
