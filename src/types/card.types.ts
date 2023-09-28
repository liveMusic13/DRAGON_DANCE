export interface ICard {
	id: number;
	type: string;
	rarity: string;
	name: string;
	house: string;
	characteristics: {
		rangedAttack?: number;
		attack?: number;
		attackAgainstCavalry?: number;
		defence?: number;
		health?: number;
		move?: number;
		chunning?: number;
		influence?: number;
		intrigue?: number;
	};
	description: string;
}

export interface IRarity {
	regular: ICard[];
	rare: ICard[];
	epic: ICard[];
	legendary: ICard[];
}

export interface IRarityHouse {
	regular: {
		stark: ICard[];
		tully: ICard[];
		targarien: ICard[];
		lannister: ICard[];
		baratheon: ICard[];
		arryn: ICard[];
		grayjoy: ICard[];
		martel: ICard[];
		hightower: ICard[];
	};
	rare: {
		stark: ICard[];
		tully: ICard[];
		targarien: ICard[];
		lannister: ICard[];
		baratheon: ICard[];
		arryn: ICard[];
		grayjoy: ICard[];
		martel: ICard[];
		hightower: ICard[];
	};
	epic: {
		stark: ICard[];
		tully: ICard[];
		targarien: ICard[];
		lannister: ICard[];
		baratheon: ICard[];
		arryn: ICard[];
		grayjoy: ICard[];
		martel: ICard[];
		hightower: ICard[];
	};
	legendary: {
		stark: ICard[];
		tully: ICard[];
		targarien: ICard[];
		lannister: ICard[];
		baratheon: ICard[];
		arryn: ICard[];
		grayjoy: ICard[];
		martel: ICard[];
		hightower: ICard[];
	};
}