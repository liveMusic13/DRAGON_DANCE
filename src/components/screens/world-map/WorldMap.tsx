import cn from 'clsx';
import React, { FC } from 'react';
import Layout from '../../layout/Layout';
import Music from '../../ui/music/Music';
import styles from './WorldMap.module.scss';

const WorldMap: FC = () => {
	return (
		<Layout bgImage='url("./images/screens/vladeniya.webp")' bgSize='contain'>
			<Music />
			<div className={styles.wrapper}>
				<div className={styles['left-interface']}>
					<div className={styles['left-interface__block-resources']}>
						<div className={styles['left-interface__block-gold']}>
							<img
								className={styles.gold}
								src='./images/icon-gold.png'
								alt='image'
							/>
							<p className={styles.numGold}>100</p>
						</div>
					</div>
					<div className={styles['left-interface__icon-player']}>
						<img src='./images/choise-house/House_Stark.svg' alt='image' />
						<p>Игрок 1</p>
					</div>
					<ul
						className={cn(
							styles['left-interface_menu-player'],
							styles['player-menu'],
						)}
					>
						<li className={styles['player-menu__collection']}>Моя коллекция</li>
						<li className={styles['player-menu__collection']}>Магазин</li>
						<li className={styles['player-menu__collection']}>Рейды</li>
					</ul>

					<button className={styles.endOfStroke}>Завершить ход</button>
				</div>
				<div className={styles['right-interface']}>2</div>
			</div>
		</Layout>
	);
};

export default WorldMap;
