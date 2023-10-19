import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './MakeCardDeck.module.scss';

interface IMakeCardDeck {
	cardDeck: string;
}

const MakeCardDeck: FC<IMakeCardDeck> = ({ cardDeck }) => {
	const { users } = useSelector(state => state);
	const { countPlayers } = useSelector(state => state);

	return (
		<>
			<div className={styles.wrapper}>
				<h2 className={styles.nameDeck}>{cardDeck}</h2>
				<div className={styles.block__cardName}>
					{users[countPlayers.count].collectionCard.cardDeck.map(deck => {
						if (deck.name === cardDeck) {
							//TODO: Разобраться с выводом имени карт в колоде
							{
								deck.card?.map(card => {
									return <p>{card.name}</p>;
								});
							}
						}
					})}
				</div>
				<p className={styles.countCrad}>
					{users[countPlayers.count].collectionCard.cardDeck.forEach(deck => {
						if (deck.name === cardDeck) deck.card.length; //TODO: Разобраться с выводом длинны массива
					})}
					/ 30
				</p>
			</div>
		</>
	);
};

export default MakeCardDeck;
