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
					name: 'init deck',
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
		openBooster: (state, { payload }) => {
			state[payload.numPlayer].haveBooster -= payload.deleteOneBooster;
		},
		byBooster: (state, { payload }) => {
			if (state[payload.numPlayer].gold >= 80) {
				state[payload.numPlayer].haveBooster += payload.addOneBooster;
				state[payload.numPlayer].gold -= payload.price;
			}
		},
		addFullCollectionCard: (state, { payload }) => {
			state[payload.numPlayer].collectionCard.fullCollection.push(payload.card);
		},
		creatNewDeck: (state, { payload }) => {
			state[payload.numPlayer].collectionCard.cardDeck.push({
				name: payload.name,
				card: [],
			});
		},
		createCardDeck: (state, { payload }) => {
			const { numPlayer, name, card } = payload;

			// Находим колоду для заданного игрока
			const cardDeck = state[numPlayer].collectionCard.cardDeck;

			// Находим индекс существующей колоды, где имя совпадает
			const deckIndex = cardDeck.findIndex(deck => deck.name === name);

			// Проверяем, есть ли колода с таким именем
			if (deckIndex !== -1) {
				const existingDeck = cardDeck[deckIndex];

				// Подсчитываем, сколько карт с таким же id и редкостью уже есть в колоде
				const existingCardsCount = existingDeck.card.filter(
					existingCard =>
						existingCard.id === card.id && existingCard.rarity === card.rarity,
				).length;

				// Определяем максимальное количество карт в зависимости от редкости
				let maxCount: number;
				if (card.rarity === 'regular' || card.rarity === 'rare') {
					maxCount = 3;
				} else if (card.rarity === 'epic') {
					maxCount = 2;
				} else {
					// 'legendary'
					maxCount = 1;
				}
				// Если количество таких карт не превышает максимального значения и не превышает размер колоды, мы добавляем новую карту
				cardDeck.forEach((deck, index) => {
					if (deck.name === payload.name && deck.card.length <= 29) {
						if (existingCardsCount < maxCount) {
							state[numPlayer].collectionCard.cardDeck[deckIndex].card.push(
								card,
							);
						}
					}
				});
			}
		},
		deleteCardDeck: (state, { payload }) => {
			const { numPlayer, nameDeck, id } = payload;

			// Находим колоду для заданного игрока
			const player = state[numPlayer];
			const cardDecks = player.collectionCard.cardDeck;

			// Находим индекс существующей колоды, где имя совпадает
			const deckIndex = cardDecks.findIndex(deck => deck.name === nameDeck);

			if (deckIndex !== -1) {
				const deck = cardDecks[deckIndex];

				// Фильтруем карты в колоде, исключая карту с заданным id
				const updatedCards = deck.card.filter(card => card.id !== id);

				// Создаем новую копию колоды с обновленным списком карт
				const updatedDeck = { ...deck, card: updatedCards };

				// Создаем новый массив копий колод с обновленной колодой
				const updatedDecks = [...cardDecks];
				updatedDecks[deckIndex] = updatedDeck;

				// Возвращаем обновленное состояние
				return {
					...state,
					[numPlayer]: {
						...player,
						collectionCard: {
							...player.collectionCard,
							cardDeck: updatedDecks,
						},
					},
				};
			}

			// Если колода не найдена, возвращаем исходное состояние
			return state;
		},
	},
});

export const { actions, reducer } = Users;
