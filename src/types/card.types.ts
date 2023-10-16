export interface ICharacteristicsForComponentCard {
	attack?: number;
	rangedAttack?: number;
	attackAgainstCavalry?: number;
	health?: number;
	move?: number;
	defence?: number;
	influence?: number;
	intrigue?: number;
}

export interface ICardForOpenBooster {
	collection?: boolean;
	newCard: {
		id: number;
		type: string;
		house: string;
		description: string;
		name: string;
		image: string;
		rarity: string;
		characteristics: {
			attack?: number;
			rangedAttack?: number;
			attackAgainstCavalry?: number;
			health?: number;
			move?: number;
			defence?: number;
			influence?: number;
			intrigue?: number;
		};
	};
}

export interface ICard {
	id: number;
	type: string;
	rarity: string;
	name: string;
	house: string;
	image: string;
	characteristics: {
		rangedAttack?: number;
		attack?: number;
		attackAgainstCavalry?: number;
		defence?: number;
		health?: number;
		move?: number;
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
		velaryon: ICard[];
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
		velaryon: ICard[];
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
		velaryon: ICard[];
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
		velaryon: ICard[];
		targarien: ICard[];
		lannister: ICard[];
		baratheon: ICard[];
		arryn: ICard[];
		grayjoy: ICard[];
		martel: ICard[];
		hightower: ICard[];
	};
}
