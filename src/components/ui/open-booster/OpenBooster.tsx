import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/users/Users.slice';
import { ICard, IGetRandomNewCard } from '../../../types/card.types';
import {
	RootStateCountPlayers,
	RootStateUsers,
} from '../../../types/rootStateUsers.types';
import useGetCardInBooster from '../../hooks/useGetCardInBooster';
import useGetNewCard from '../../hooks/useGetNewCard';
import Button from '../button/Button';
import Card from '../card/Card';
import styles from './OpenBooster.module.scss';

interface IViewOpenBooster {
	setOpenBooster: Dispatch<SetStateAction<boolean>>;
}

const OpenBooster: FC<IViewOpenBooster> = ({ setOpenBooster }) => {
	const { users } = useSelector((state: RootStateUsers) => state);
	const { countPlayers } = useSelector((state: RootStateCountPlayers) => state);

	const dispatch = useDispatch();

	const [viewCardInBooster, setViewCardInBooster] = useState<boolean>(false);

	const { getRandomCard } = useGetCardInBooster();
	const { getNewCard } = useGetNewCard();

	const arrayNewCard: ICard[] = [];

	const funckAddInArray = () => {
		let newCard: IGetRandomNewCard = {
			cardOne: getNewCard(getRandomCard())!,
			cardTwo: getNewCard(getRandomCard())!,
			cardThree: getNewCard(getRandomCard())!,
			cardFour: getNewCard(getRandomCard())!,
			cardFive: getNewCard(getRandomCard())!,
		};

		for (let cardKey in newCard) {
			if (Object.prototype.hasOwnProperty.call(newCard, cardKey)) {
				const card = newCard[cardKey];
				if (card) {
					arrayNewCard.push(card);
				}
			}
		}
	};

	funckAddInArray();

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__openBooster}>
				{viewCardInBooster ? (
					<div
						className={styles.block__getCard}
						onClick={() => {
							arrayNewCard.forEach((card: ICard) => {
								dispatch(
									actions.addFullCollectionCard({
										numPlayer: countPlayers.count,
										card: card,
									}),
								);
							});
							setViewCardInBooster(false);
						}}
					>
						{arrayNewCard.map((card: ICard) => {
							return (
								<Card key={Math.random() + Math.random()} newCard={card} />
							);
						})}
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
