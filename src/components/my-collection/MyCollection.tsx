import React, { Dispatch, FC, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import Button from '../ui/button/Button';
import Card from '../ui/card/Card';
import styles from './MyCollection.module.scss';

interface IViewCollection {
	setVieCollection: Dispatch<SetStateAction<boolean>>;
}

const MyCollection: FC<IViewCollection> = ({ setVieCollection }) => {
	const { users } = useSelector(state => state);
	const { countPlayers } = useSelector(state => state);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__deckCard}>
				<h2 className={styles.block__deckCard_title}>Ваши колоды</h2>
			</div>
			<div className={styles.block__card}>
				<h2 className={styles.block__card_title}>Ваши карты</h2>
				<div className={styles.block__card__fullCollection}>
					{users[countPlayers.count].collectionCard.fullCollection.map(card => {
						return <Card collection={true} newCard={card} />;
					})}
				</div>
			</div>

			<Button setVieCollection={setVieCollection}>Назад</Button>
		</div>
	);
};

export default MyCollection;
