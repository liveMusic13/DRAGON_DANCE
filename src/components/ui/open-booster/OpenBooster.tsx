import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/users/Users.slice';
import { ICard } from '../../../types/card.types';
import useGetCardInBooster from '../../hooks/useGetCardInBooster';
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

	const getNewCard = (card: ICard) => {
		const newCard = {
			id: card.id,
			type: card.type,
			rarity: card.rarity,
			name: card.name,
			house: card.house,
			image: card.image,
			characteristics: {},
			description: card.description,
		};

		if (card.characteristics.attack)
			newCard.characteristics.attack = card.characteristics.attack;
		if (card.characteristics.rangedAttack)
			newCard.characteristics.rangedAttack = card.characteristics.rangedAttack;
		if (card.characteristics.attackAgainstCavalry)
			newCard.characteristics.attackAgainstCavalry =
				card.characteristics.attackAgainstCavalry;
		if (card.characteristics.defence)
			newCard.characteristics.defence = card.characteristics.defence;
		if (card.characteristics.health)
			newCard.characteristics.health = card.characteristics.health;
		if (card.characteristics.move)
			newCard.characteristics.move = card.characteristics.move;
		if (card.characteristics.influence)
			newCard.characteristics.influence = card.characteristics.influence;
		if (card.characteristics.intrigue)
			newCard.characteristics.intrigue = card.characteristics.intrigue;

		return newCard;
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__openBooster}>
				{viewCardInBooster ? (
					<Card newCard={getNewCard(getRandomCard())} />
				) : (
					<div
						className={styles.booster_standart}
						onClick={() => {
							if (users[countPlayers.count].haveBooster !== 0) {
								setViewCardInBooster(true);
								dispatch(
									actions.byBooster({
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
