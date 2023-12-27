import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/users/Users.slice';
import { ICard } from '../../../types/card.types';
import {
	RootStateCountPlayers,
	RootStateUsers,
} from '../../../types/rootStateUsers.types';
import { ICardDeck } from '../../../types/state.users';
import styles from './MakeCardDeck.module.scss';

interface IMakeCardDeck {
	cardDeck: string;
}

const MakeCardDeck: FC<IMakeCardDeck> = ({ cardDeck }) => {
	const { users } = useSelector((state: RootStateUsers) => state);
	const { countPlayers } = useSelector((state: RootStateCountPlayers) => state);

	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.wrapper}>
				<h2 className={styles.nameDeck}>{cardDeck}</h2>
				<div className={styles.block__cardName}>
					{users[countPlayers.count].collectionCard.cardDeck
						.filter((deck: ICardDeck) => deck.name === cardDeck)
						.map((deck: ICardDeck) => {
							return deck.card.map((card: ICard) => {
								return (
									<p
										key={Math.random()}
										onClick={() =>
											dispatch(
												actions.deleteCardDeck({
													numPlayer: countPlayers.count,
													nameDeck: deck.name,
													id: card.id,
												}),
											)
										}
									>
										{card.name}
									</p>
								);
							});
						})}
				</div>

				{users[countPlayers.count].collectionCard.cardDeck
					.filter((deck: ICardDeck) => deck.name === cardDeck)
					.map((deck: ICardDeck) => {
						return <p className={styles.countCrad}>{deck.card.length} / 30</p>;
					})}
			</div>
		</>
	);
};

export default MakeCardDeck;
