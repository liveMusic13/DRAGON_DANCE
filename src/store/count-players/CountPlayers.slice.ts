import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

export const CountPlayers = createSlice({
	name: 'countPlayers',
	initialState,
	reducers: {
		addCountPlayers: (state, { payload }) => {
			return {
				count: payload,
			};
		},
	},
});

export const { actions, reducer } = CountPlayers;
