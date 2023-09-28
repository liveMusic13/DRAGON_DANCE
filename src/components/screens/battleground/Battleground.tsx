import React, { FC } from 'react';
import { cardNeutral } from '../../../data/card.data';
import Layout from '../../layout/Layout';
import Card from '../../ui/card/Card';
import styles from './Battleground.module.scss';

const Battleground: FC = () => {
	return (
		<Layout bgImage='url("./images/screens/table.jpg")' bgSize='cover'>
			<div className={styles.wrapperBattleground}>
				<div className={styles.interface}>
					<Card
						house={cardNeutral.regular[1].house}
						description={cardNeutral.regular[1].description}
						name={cardNeutral.regular[1].name}
						characteristics={cardNeutral.regular[1].characteristics}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Battleground;
