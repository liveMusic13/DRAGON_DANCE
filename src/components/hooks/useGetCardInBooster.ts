import { useSelector } from 'react-redux';
import { cardHome, cardNeutral } from '../../data/card.data';

const useGetCardInBooster = () => {
	const { countPlayers } = useSelector(state => state);

	const house =
		countPlayers.count === 0
			? 'stark'
			: countPlayers.count === 1
			? 'lannister'
			: countPlayers.count === 2
			? 'targarien'
			: countPlayers.count === 3
			? 'grayjoy'
			: countPlayers.count === 4
			? 'arryn'
			: countPlayers.count === 5
			? 'baratheon'
			: countPlayers.count === 6
			? 'velaryon'
			: countPlayers.count === 7
			? 'martel'
			: countPlayers.count === 8
			? 'hightower'
			: 'stark';

	const getRandomCard = () => {
		const rarityProbabilities = {
			regular: 0.7,
			rare: 0.2,
			epic: 0.08,
			legendary: 0.02,
		};

		const rarityRoll = Math.random();
		let rarity;

		if (rarityRoll < rarityProbabilities.regular) {
			rarity = 'regular';
		} else if (
			rarityRoll <
			rarityProbabilities.regular + rarityProbabilities.rare
		) {
			rarity = 'rare';
		} else if (
			rarityRoll <
			rarityProbabilities.regular +
				rarityProbabilities.rare +
				rarityProbabilities.epic
		) {
			rarity = 'epic';
		} else {
			rarity = 'legendary';
		}

		const randomValueCategory = Math.random();

		if (Math.random() < 0.2) {
			if (randomValueCategory < 0.7) {
				return cardHome[rarity][house][
					Math.floor(Math.random() * cardHome[rarity][house].length)
				];
			} else if (randomValueCategory < 0.9) {
				return cardHome[rarity][house][
					Math.floor(Math.random() * cardHome[rarity][house].length)
				];
			} else if (randomValueCategory < 0.98) {
				return cardHome[rarity][house][
					Math.floor(Math.random() * cardHome[rarity][house].length)
				];
			} else {
				return cardHome[rarity][house][
					Math.floor(Math.random() * cardHome[rarity][house].length)
				];
			}
		} else {
			if (randomValueCategory < 0.7) {
				return cardNeutral[rarity][
					Math.floor(Math.random() * cardNeutral[rarity].length)
				];
			} else if (randomValueCategory < 0.9) {
				return cardNeutral[rarity][
					Math.floor(Math.random() * cardNeutral[rarity].length)
				];
			} else if (randomValueCategory < 0.98) {
				return cardNeutral[rarity][
					Math.floor(Math.random() * cardNeutral[rarity].length)
				];
			} else {
				return cardNeutral[rarity][
					Math.floor(Math.random() * cardNeutral[rarity].length)
				];
			}
		}
	};

	return {
		getRandomCard,
	};
};

export default useGetCardInBooster;
