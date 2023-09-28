import cn from 'clsx';
import React, { FC } from 'react';
import styles from './Card.module.scss';

interface ICard {
	house: string;
	description: string;
	name: string;
	characteristics: {
		attack?: number;
		rangedAttack?: number;
		attackAgainstCavalry?: number;
		health?: number;
		move?: number;
		defence?: number;
		influence?: number;
		intrigue?: number;
	};
}

const Card: FC<ICard> = ({ house, name, description, characteristics }) => {
	return (
		<div className={cn(styles[`wrapper-${house}`])}>
			<h2>{name}</h2>
			<img
				className={cn(styles.image)}
				src='./images/image_card/vanguard.jpg'
				alt='vanguard'
			/>
			<div className={cn(styles.rarity)}></div>
			<div className={cn(styles['block-characteristic'])}>
				<div className={styles['block-characteristic__characteristics']}>
					<div className={styles['block-characteristic__raw']}>
						<div className={styles['block-characteristic__characteristic']}>
							<img
								src='./images/images_characteristic/attack.png'
								alt='image'
							/>
							<p>2</p>
						</div>
						<div className={styles['block-characteristic__characteristic']}>
							<img
								src='./images/images_characteristic/defence.png'
								alt='image'
							/>
							<p>3</p>
						</div>
						<div className={styles['block-characteristic__characteristic']}>
							<img
								src='./images/images_characteristic/health.png'
								alt='image'
							/>
							<p>1</p>
						</div>
						<div className={styles['block-characteristic__characteristic']}>
							<img src='./images/images_characteristic/move.png' alt='image' />
							<p>5</p>
						</div>
						<div className={styles['block-characteristic__characteristic']}>
							<img
								src='./images/images_characteristic/influence.png'
								alt='image'
							/>
							<p>6</p>
						</div>
						<div className={styles['block-characteristic__characteristic']}>
							<img
								src='./images/images_characteristic/intrigue.png'
								alt='image'
							/>
							<p>9</p>
						</div>
					</div>
				</div>
				<div className={styles['block-characteristic__main-characteristic']}>
					<p className={styles['block-characteristic__paragraph']}>20</p>
				</div>
			</div>
			<div className={cn(styles['block-description'])}>
				{description}
				{description}
			</div>
		</div>
	);
};

export default Card;
