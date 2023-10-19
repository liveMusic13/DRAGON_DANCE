import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/users/Users.slice';
import styles from './CreateNameDeck.module.scss';

interface ICreateNameDeck {
	setIsViewCreateNameDeck: Dispatch<SetStateAction<boolean>>;
}

const CreateNameDeck: FC<ICreateNameDeck> = ({ setIsViewCreateNameDeck }) => {
	const dispatch = useDispatch();
	const { countPlayers } = useSelector(state => state);
	const { users } = useSelector(state => state);

	const [nameDeck, setNameDeck] = useState<string>('');

	return (
		<>
			<input
				className={styles.nameDeck}
				type='text'
				placeholder='enter'
				value={nameDeck}
				onChange={event => setNameDeck(event.target.value)}
			/>
			<button
				className={styles.createDeck}
				onClick={() => {
					dispatch(
						actions.creatNewDeck({
							name: nameDeck,
							numPlayer: countPlayers.count,
						}),
					);
					setIsViewCreateNameDeck(false);
				}}
			>
				Создать
			</button>
		</>
	);
};

export default CreateNameDeck;
