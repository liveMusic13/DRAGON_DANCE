import { createSlice } from '@reduxjs/toolkit';
import { IStateUsers } from '../../types/state.users';

const initialState: IStateUsers[] = [
	{
		active: true,
		name: 'Игрок 1',
		gold: 1000,
		house: 'Stark',
		imageHouse: './images/choise-house/House_Stark.svg',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 2',
		gold: 1000,
		house: 'Lannister',
		imageHouse: './images/choise-house/House_Lannister.svg',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 3',
		gold: 1000,
		house: 'Targaryen',
		imageHouse: './images/choise-house/House_Targaryen.svg',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 4',
		gold: 1000,
		house: 'Grayjoy',
		imageHouse: './images/choise-house/House_Grayjoy.png',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 5',
		gold: 1000,
		house: 'Arryn',
		imageHouse: './images/choise-house/House_ArrynSigil.png',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 6',
		gold: 1000,
		house: 'Baratheon',
		imageHouse: './images/choise-house/House_Baratheon.svg',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 7',
		gold: 1000,
		house: 'Velarion',
		imageHouse: './images/choise-house/House_Velarion.png',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 8',
		gold: 1000,
		house: 'Martel',
		imageHouse: './images/choise-house/House_Martel.png',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
	{
		active: false,
		name: 'Игрок 9',
		gold: 1000,
		house: 'Hightower',
		imageHouse: './images/choise-house/House_Hightower.svg',
		haveBooster: 1,
		collectionCard: {
			fullCollection: [],
			cardDeck: [
				{
					name: '',
					card: [],
				},
			],
		},
	},
];

export const Users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addPlayer: (state, { payload }) => {
			if (payload.num > 0) {
				state.forEach((user, index) => {
					if (index <= payload.num) user.active = payload.active;
				});
			}
		},
		byBooster: (state, { payload }) => {
			state[payload.numPlayer].haveBooster -= payload.deleteOneBooster;
		},
	},
});

export const { actions, reducer } = Users;
