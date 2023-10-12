import { useSelector } from 'react-redux';
import { cardHome, cardNeutral } from '../../data/card.data';

const useGetCardInBooster = () => {
	const { countPlayers } = useSelector(state => state);

	const randomValueCategory = Math.random();

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

	const getRandomHouseCard = () => {
		if (Math.random() < 0.25) {
			if (randomValueCategory < 0.5) {
				return cardHome.regular[house][
					Math.floor(Math.random() * cardHome.regular[house].length)
				];
			} else if (randomValueCategory < 0.75) {
				return cardHome.rare[house][
					Math.floor(Math.random() * cardHome.rare[house].length)
				];
			} else if (randomValueCategory < 0.9) {
				return cardHome.epic[house][
					Math.floor(Math.random() * cardHome.epic[house].length)
				];
			} else {
				return cardHome.legendary[house][
					Math.floor(Math.random() * cardHome.legendary[house].length)
				];
			}
		} else {
			if (randomValueCategory < 0.5) {
				return cardNeutral.regular[
					Math.floor(Math.random() * cardNeutral.regular.length)
				];
			} else if (randomValueCategory < 0.75) {
				return cardNeutral.rare[
					Math.floor(Math.random() * cardNeutral.rare.length)
				];
			} else if (randomValueCategory < 0.9) {
				return cardNeutral.epic[
					Math.floor(Math.random() * cardNeutral.epic.length)
				];
			} else {
				return cardNeutral.legendary[
					Math.floor(Math.random() * cardNeutral.legendary.length)
				];
			}
		}
	};

	return {
		getRandomHouseCard,
	};
};

export default useGetCardInBooster;
