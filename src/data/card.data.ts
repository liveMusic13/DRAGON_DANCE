//как будет происходить выбор в бустер? в начале будет проверяться вероятность получить карту дома либо нейтральную (допустим 25 на 75), потом проверка на редкость (см. в чат gpt), после если карта дома, то допустим cardHome.rare.stark[случайное число] или если нейтралка, то cardNeutral.regular[случайное число]

import { IRarity, IRarityHouse } from '../types/card.types';

export const cardHome: IRarityHouse = {
	regular: {
		stark: [],
		tully: [],
		targarien: [],
		lannister: [],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
	rare: {
		stark: [],
		tully: [],
		targarien: [],
		lannister: [],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
	epic: {
		stark: [],
		tully: [],
		targarien: [],
		lannister: [],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
	legendary: {
		stark: [],
		tully: [],
		targarien: [],
		lannister: [],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
};

export const cardNeutral: IRarity = {
	regular: [
		{
			id: 1,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Ополченец',
			characteristics: {
				attack: 2,
				health: 3,
				move: 1,
			},
			description:
				'Ополченцы - неопытные, но решительные крестьяне, вступившие в борьбу за свои земли.',
		},
		{
			id: 2,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Мечник (Щит и меч)',
			characteristics: {
				attack: 3,
				defence: 3,
				health: 4,
				move: 1,
			},
			description:
				'Мечник с Щитом и Мечом - обладает балансом между атакой и защитой, что делает его надежным сторонником на поле боя.',
		},
		{
			id: 3,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Мечник (Двуручный меч)',
			characteristics: {
				attack: 5,
				defence: 1,
				health: 4,
				move: 1,
			},
			description:
				'Мечник с Двуручным Мечом - сосредоточен на нанесении максимального урона в ближнем бою и готов встретить любой вызов на поле сражения.',
		},
		{
			id: 4,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Копейщик',
			characteristics: {
				attackAgainstCavalry: 6,
				defence: 1,
				health: 3,
				move: 1,
			},
			description: 'Антикавалерийский юнит',
		},
		{
			id: 5,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Лучник',
			characteristics: {
				rangedAttack: 6,
				defence: 1,
				health: 3,
				move: 1,
			},
			description:
				'Лучник - искусный стрелок, владеющий мастерством стрельбы из лука и способный точно поражать цели.',
		},
		{
			id: 6,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Кавалерия',
			characteristics: {
				rangedAttack: 6,
				defence: 3,
				health: 3,
				move: 3,
			},
			description:
				'Кавалерия - быстрые воины на конях, наносят мощные атаки с разгона и маневрируют на поле боя.',
		},
		{
			id: 7,
			house: 'none',
			type: 'effect',
			rarity: 'regular',
			name: 'Туман',
			characteristics: {
				rangedAttack: 3,
			},
			description:
				'Погружает поле битвы в густой мрак, уменьшая эффективность лучников на поле боя',
		},
	],
	rare: [],
	epic: [],
	legendary: [],
};
