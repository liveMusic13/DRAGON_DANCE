import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/users/Users.slice';
import styles from './MakeCardDeck.module.scss';

interface IMakeCardDeck {
	cardDeck: string;
}

const MakeCardDeck: FC<IMakeCardDeck> = ({ cardDeck }) => {
	const { users } = useSelector(state => state);
	const { countPlayers } = useSelector(state => state);

	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.wrapper}>
				<h2 className={styles.nameDeck}>{cardDeck}</h2>
				<div className={styles.block__cardName}>
					{users[countPlayers.count].collectionCard.cardDeck
						.filter(deck => deck.name === cardDeck)
						.map(deck => {
							return deck.card.map(card => {
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
					.filter(deck => deck.name === cardDeck)
					.map(deck => {
						return <p className={styles.countCrad}>{deck.card.length} / 30</p>;
					})}
			</div>
		</>
	);
};

export default MakeCardDeck;
