import React, { FC, useState } from 'react';
import ChoiseHouse from '../../choise-house/ChoiseHouse';
import ChoisePlayer from '../../choise-player/ChoisePlayer';
import Layout from '../../layout/Layout';
import Music from '../../ui/music/Music';
import styles from './Home.module.scss';

const Home: FC = () => {
	const [choisePlayers, setChoisePlayers] = useState<boolean>(false);
	const [choiseHouse, setChoiseHouse] = useState<boolean>(false);
	const [blackout, setBlackout] = useState<string>('blackout_off');

	return (
		<Layout bgImage={'url(./images/screens/home.jpg)'} bgSize={'cover'}>
			<div
				className={styles[blackout]}
				onClick={() => {
					setBlackout('blackout_off');
					setChoisePlayers(!choisePlayers);
				}}
			></div>
			<Music />
			<div className={styles.block_content}>
				<h1>DRAGON DANCE</h1>
				<h3>Card game</h3>
				<ul>
					<li
						className={styles.first}
						onClick={() => {
							setBlackout('blackout_on');
							setChoisePlayers(!choisePlayers);
						}}
					>
						Начать игру
					</li>
					<li>Продолжить</li>
					<li>Выход</li>
				</ul>
			</div>
			{choisePlayers && (
				<ChoisePlayer
					setChoisePlayers={setChoisePlayers}
					setChoiseHouse={setChoiseHouse}
				/>
			)}
			{choiseHouse && <ChoiseHouse />}
		</Layout>
	);
};

export default Home;
