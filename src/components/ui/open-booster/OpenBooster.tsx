import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/users/Users.slice';
import useGetCardInBooster from '../../hooks/useGetCardInBooster';
import useGetNewCard from '../../hooks/useGetNewCard';
import Button from '../button/Button';
import Card from '../card/Card';
import styles from './OpenBooster.module.scss';

interface IViewOpenBooster {
	setOpenBooster: Dispatch<SetStateAction<boolean>>;
}

const OpenBooster: FC<IViewOpenBooster> = ({ setOpenBooster }) => {
	const { users } = useSelector(state => state);
	const { countPlayers } = useSelector(state => state);

	const dispatch = useDispatch();

	const [viewCardInBooster, setViewCardInBooster] = useState<boolean>(false);

	const { getRandomCard } = useGetCardInBooster();
	const { getNewCard } = useGetNewCard();

	let cardOne = getNewCard(getRandomCard());
	let cardTwo = getNewCard(getRandomCard());
	let cardThree = getNewCard(getRandomCard());
	let cardFour = getNewCard(getRandomCard());
	let cardFive = getNewCard(getRandomCard());
	console.log(cardOne);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__openBooster}>
				{viewCardInBooster ? (
					<div
						className={styles.block__getCard}
						onClick={() => {
							dispatch(
								actions.addFullCollectionCard({
									numPlayer: countPlayers.count,
									card: cardOne,
								}),
							);
							dispatch(
								actions.addFullCollectionCard({
									numPlayer: countPlayers.count,
									card: cardTwo,
								}),
							);
							dispatch(
								actions.addFullCollectionCard({
									numPlayer: countPlayers.count,
									card: cardThree,
								}),
							);
							dispatch(
								actions.addFullCollectionCard({
									numPlayer: countPlayers.count,
									card: cardFour,
								}),
							);
							dispatch(
								actions.addFullCollectionCard({
									numPlayer: countPlayers.count,
									card: cardFive,
								}),
							);
							setViewCardInBooster(false);
						}}
					>
						<Card newCard={cardOne} />
						<Card newCard={cardTwo} />
						<Card newCard={cardThree} />
						<Card newCard={cardFour} />
						<Card newCard={cardFive} />
					</div>
				) : (
					<div
						className={styles.booster_standart}
						onClick={() => {
							if (users[countPlayers.count].haveBooster !== 0) {
								setViewCardInBooster(true);
								dispatch(
									actions.openBooster({
										numPlayer: countPlayers.count,
										deleteOneBooster: 1,
									}),
								);
							}
						}}
					>
						<p className={styles.nameBooster}>Стандартный набор</p>
						<p className={styles.image}>&#63;</p>
					</div>
				)}
			</div>
			<div className={styles.block__activeBooster}>
				<p className={styles.activeBooster__paragraph}>
					Количество доступных бустеров
				</p>
				<p className={styles.activeBooster__number}>
					{users[countPlayers.count].haveBooster}
				</p>
			</div>
			<Button setOpenBooster={setOpenBooster}>Назад</Button>
		</div>
	);
};

export default OpenBooster;
