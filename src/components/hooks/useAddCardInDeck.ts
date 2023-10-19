import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/users/Users.slice';

const useAddCardInDeck = () => {
	const dispatch = useDispatch();
	const { countPlayers } = useSelector(state => state);

	const addCardInDeck = (card, cardDeck) => {
		console.log(card.id);
		dispatch(
			actions.createCardDeck({
				card: card,
				numPlayer: countPlayers.count,
				name: cardDeck,
			}),
		);
	};

	return {
		addCardInDeck,
	};
};

export default useAddCardInDeck;
