import React, { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/users/Users.slice';
import { RootStateCountPlayers } from '../../types/rootStateUsers.types';
import Button from '../ui/button/Button';
import styles from './Shop.module.scss';

interface IViewShop {
	setViewShop: Dispatch<SetStateAction<boolean>>;
}

const Shop: FC<IViewShop> = ({ setViewShop }) => {
	const dispatch = useDispatch();
	const { countPlayers } = useSelector((state: RootStateCountPlayers) => state);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__booster}>
				<div
					className={styles.booster_standart}
					onClick={() => {
						dispatch(
							actions.byBooster({
								numPlayer: countPlayers.count,
								price: 80,
								addOneBooster: 1,
							}),
						);
					}}
				>
					<p className={styles.nameBooster}>Стандартный набор</p>
					<p className={styles.image}>&#63;</p>
					<p className={styles.price}>80</p>
				</div>
			</div>
			<Button setViewShop={setViewShop}>Назад</Button>
		</div>
	);
};

export default Shop;
