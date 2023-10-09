import cn from 'clsx';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../../store/count-players/CountPlayers.slice';
import Layout from '../../layout/Layout';
import MyCollection from '../../my-collection/MyCollection';
import Shop from '../../shop/Shop';
import IconOnTheMap from '../../ui/icon-on-the-map/IconOnTheMap';
import Music from '../../ui/music/Music';
import styles from './WorldMap.module.scss';

const WorldMap: FC = () => {
	const [viewMenu, setViewMenu] = useState<boolean>(false);
	const [viewShop, setViewShop] = useState<boolean>(false);
	const [viewCollection, setVieCollection] = useState<boolean>(false);

	const { users } = useSelector(state => state);

	const [countPlayer, setCountPlayer] = useState<number>(0);
	const dispatch = useDispatch();

	const nextPlayer = () => {
		let nextIndex = (countPlayer + 1) % users.length;
		while (!users[nextIndex].active) {
			nextIndex = (nextIndex + 1) % users.length;
		}

		setCountPlayer(nextIndex);
		dispatch(actions.addCountPlayers(nextIndex));
	};

	return (
		<Layout
			bgImage={
				viewShop
					? 'url("./images/screens/shop_booster.jpg")'
					: viewCollection
					? 'url("./images/screens/iron_throne.jpg")'
					: 'url("./images/screens/vladeniya.webp")'
			}
			bgSize={viewCollection || viewShop ? 'cover' : 'contain'}
		>
			<Music />
			{viewShop ? (
				<Shop setViewShop={setViewShop} />
			) : viewCollection ? (
				<MyCollection setVieCollection={setVieCollection} />
			) : (
				<div className={styles.wrapper}>
					<div className={styles['left-interface']}>
						<div className={styles['left-interface__block-resources']}>
							<div className={styles['left-interface__block-gold']}>
								<img
									className={styles.gold}
									src='./images/icon-gold.png'
									alt='image'
								/>
								<p className={styles.numGold}>{users[countPlayer].gold}</p>
							</div>
						</div>
						<div className={styles['left-interface__icon-player']}>
							<img src={users[countPlayer].imageHouse} alt='image' />
							<p>{users[countPlayer].name}</p>
						</div>
						<ul
							className={cn(
								styles['left-interface_menu-player'],
								styles['player-menu'],
							)}
						>
							<li
								onClick={() => setVieCollection(true)}
								className={styles['player-menu__collection']}
							>
								Моя коллекция
							</li>
							<li className={styles['player-menu__collection']}>
								Открыть бустеры
							</li>
							<li
								onClick={() => setViewShop(true)}
								className={styles['player-menu__collection']}
							>
								Магазин
							</li>
							<li className={styles['player-menu__collection']}>Рейды</li>
						</ul>

						<button className={styles.endOfStroke} onClick={nextPlayer}>
							Завершить ход
						</button>
					</div>
					<div className={styles['right-interface']}>
						<button
							className={styles['right-interface__button-menu']}
							onClick={() => setViewMenu(!viewMenu)}
						>
							{viewMenu ? 'Закрыть меню' : 'Меню'}{' '}
						</button>
						{viewMenu && (
							<>
								<ul className={styles['right-interface__menu']}>
									<li>
										<Link to={'/'} className={styles['right-interface__link']}>
											Меню
										</Link>
									</li>
								</ul>
							</>
						)}
					</div>
					{users.map(icon => {
						return (
							<IconOnTheMap
								key={Math.random()}
								img={icon.imageHouse}
								house={icon.house}
							>
								{icon.name}
							</IconOnTheMap>
						);
					})}
				</div>
			)}
		</Layout>
	);
};

export default WorldMap;
