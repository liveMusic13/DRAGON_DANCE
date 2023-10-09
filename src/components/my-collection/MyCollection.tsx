import React, { Dispatch, FC, SetStateAction } from 'react';
import Button from '../ui/button/Button';
import styles from './MyCollection.module.scss';

interface IViewCollection {
	setVieCollection: Dispatch<SetStateAction<boolean>>;
}

const MyCollection: FC<IViewCollection> = ({ setVieCollection }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block__deckCard}>
				<h2 className={styles.block__deckCard_title}>Ваши колоды</h2>
			</div>
			<div className={styles.block__card}>
				<h2 className={styles.block__card_title}>Ваши карты</h2>
			</div>

			<Button setVieCollection={setVieCollection}>Назад</Button>
		</div>
	);
};

export default MyCollection;
