import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/users/Users.slice';
import { ICard } from '../../types/card.types';
import { RootStateCountPlayers } from '../../types/rootStateUsers.types';
import { ICardDeck } from '../../types/state.users';

const useAddCardInDeck = () => {
	const dispatch = useDispatch();
	const { countPlayers } = useSelector((state: RootStateCountPlayers) => state);

	const addCardInDeck = (card: ICard, cardDeck: ICardDeck) => {
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
