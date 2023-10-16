import { ICard } from '../../types/card.types';

const useGetNewCard = () => {
	const getNewCard = (card: ICard) => {
		const newCard = {
			id: card.id,
			type: card.type,
			rarity: card.rarity,
			name: card.name,
			house: card.house,
			image: card.image,
			characteristics: {},
			description: card.description,
		};

		if (card.characteristics.attack)
			newCard.characteristics.attack = card.characteristics.attack;
		if (card.characteristics.rangedAttack)
			newCard.characteristics.rangedAttack = card.characteristics.rangedAttack;
		if (card.characteristics.attackAgainstCavalry)
			newCard.characteristics.attackAgainstCavalry =
				card.characteristics.attackAgainstCavalry;
		if (card.characteristics.defence)
			newCard.characteristics.defence = card.characteristics.defence;
		if (card.characteristics.health)
			newCard.characteristics.health = card.characteristics.health;
		if (card.characteristics.move)
			newCard.characteristics.move = card.characteristics.move;
		if (card.characteristics.influence)
			newCard.characteristics.influence = card.characteristics.influence;
		if (card.characteristics.intrigue)
			newCard.characteristics.intrigue = card.characteristics.intrigue;

		return newCard;
	};

	return {
		getNewCard,
	};
};

export default useGetNewCard;
