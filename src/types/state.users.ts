interface ICard {
	test: string; //все карты игрока
}

interface ICardDeck {
	name: string;
	card: ICard[]; // карты колоды
}

export interface IStateUsers {
	active: boolean;
	name: string;
	gold: number;
	house: string;
	imageHouse: string;
	collectionCard: {
		fullCollection: ICard[];
		cardDeck: ICardDeck[];
	};
}
