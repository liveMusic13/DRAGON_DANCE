import React, { Dispatch, FC, SetStateAction } from 'react';
import Button from '../ui/button/Button';
import styles from './Shop.module.scss';

interface IViewShop {
	setViewShop: Dispatch<SetStateAction<boolean>>;
}

const Shop: FC<IViewShop> = ({ setViewShop }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block__booster}>
				<div className={styles.booster_standart}>
					<p className={styles.nameBooster}>Стандартный набор</p>
					<p className={styles.image}>&#63;</p>
					<p className={styles.price}>50</p>
				</div>
			</div>
			<Button setViewShop={setViewShop}>Назад</Button>
		</div>
	);
};

export default Shop;
