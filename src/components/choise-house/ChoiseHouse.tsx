import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChoiseHouse.module.scss';
import house from './house.data';

const ChoiseHouse: FC = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();

	return (
		<div className={styles.wrapper}>
			{house.map(elem => {
				return (
					<div
						key={elem.id}
						className={styles.house}
						onClick={() => {
							// dispatch(
							// 	actions.addPlayerHouse({ num: elem.id, house: elem.name }),
							// );
							navigate('/worldMap');
						}}
					>
						<h2>{elem.name}</h2>
						<p>Игрок {elem.id}</p>
						<img src={elem.image} alt='image' />
					</div>
				);
			})}
		</div>
	);
};

export default ChoiseHouse;
