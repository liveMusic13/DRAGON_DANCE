import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	playerOne: {
		name: '',
		cardDeck: [],
	},
};

export const Users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addPlayerOneName: (state, { payload }) => {
			state.playerOne.name = payload;
		},
	},
});

export const { actions, reducer } = Users;
