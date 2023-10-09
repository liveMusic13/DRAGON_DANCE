import React, { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/users/Users.slice';
import styles from './ChoisePlayer.module.scss';

interface IHouse {
	setChoisePlayers: Dispatch<SetStateAction<boolean>>;
	setChoiseHouse: Dispatch<SetStateAction<boolean>>;
}

const ChoisePlayer: FC<IHouse> = ({ setChoisePlayers, setChoiseHouse }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.wrapper}>
			<h2>Выберете количество игроков на одном компьютере</h2>
			<div className={styles['block-change-players']}>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 0, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					1 игрок
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 1, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					2 игрока
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 2, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					3 игрока
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 3, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					4 игрока
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 4, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					5 игроков
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 5, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					6 игроков
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 6, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					7 игроков
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 7, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					8 игроков
				</button>
				<button
					className={styles.player}
					onClick={() => {
						dispatch(actions.addPlayer({ num: 8, active: true }));
						setChoisePlayers(false);
						setChoiseHouse(true);
					}}
				>
					9 игроков
				</button>
			</div>
		</div>
	);
};

export default ChoisePlayer;
