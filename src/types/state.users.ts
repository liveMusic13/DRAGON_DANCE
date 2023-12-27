import { ICard } from './card.types';

export interface ICardDeck {
	name: string;
	card: ICard[]; // карты колоды
}

export interface IStateUsers {
	active: boolean;
	name: string;
	gold: number;
	house: string;
	imageHouse: string;
	haveBooster: number;
	collectionCard: {
		fullCollection: ICard[];
		cardDeck: ICardDeck[];
	};
}
