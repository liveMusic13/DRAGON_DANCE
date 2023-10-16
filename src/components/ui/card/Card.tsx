import cn from 'clsx';
import React, { FC } from 'react';
import {
	ICardForOpenBooster,
	ICharacteristicsForComponentCard,
} from '../../../types/card.types';
import styles from './Card.module.scss';

const Card: FC<ICardForOpenBooster> = ({ newCard, collection }) => {
	const strongCard = (
		characteristics: ICharacteristicsForComponentCard,
	): number => {
		let resultStrong = 0;

		for (let value in characteristics) {
			resultStrong += characteristics[value];
		}

		return resultStrong;
	};

	return (
		<div
			className={cn({
				[styles[`wrapper-${newCard.house}`]]: !collection,
				[styles[`wrapper-${newCard.house}-collection`]]: collection,
			})}
		>
			<h2>{newCard.name}</h2>
			<img
				className={cn(styles.image)}
				src={newCard.image}
				alt={newCard.name}
			/>
			<div className={cn(styles[`rarity-${newCard.rarity}`])}></div>
			<div className={cn(styles['block-characteristic'])}>
				<div className={styles['block-characteristic__characteristics']}>
					<div className={styles['block-characteristic__raw']}>
						{newCard.characteristics.attack && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/attack.png'
									alt='image'
								/>
								<p>{newCard.characteristics.attack}</p>
							</div>
						)}
						{newCard.characteristics.rangedAttack && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/attack.png'
									alt='image'
								/>
								<p>{newCard.characteristics.rangedAttack}</p>
							</div>
						)}
						{newCard.characteristics.attackAgainstCavalry && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/attack.png'
									alt='image'
								/>
								<p>{newCard.characteristics.attackAgainstCavalry}</p>
							</div>
						)}
						{newCard.characteristics.defence && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/defence.png'
									alt='image'
								/>
								<p>{newCard.characteristics.defence}</p>
							</div>
						)}
						{newCard.characteristics.health && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/health.png'
									alt='image'
								/>
								<p>{newCard.characteristics.health}</p>
							</div>
						)}
						{newCard.characteristics.move && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/move.png'
									alt='image'
								/>
								<p>{newCard.characteristics.move}</p>
							</div>
						)}
						{newCard.characteristics.influence && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/influence.png'
									alt='image'
								/>
								<p>{newCard.characteristics.influence}</p>
							</div>
						)}
						{newCard.characteristics.intrigue && (
							<div className={styles['block-characteristic__characteristic']}>
								<img
									src='./images/images_characteristic/intrigue.png'
									alt='image'
								/>
								<p>{newCard.characteristics.intrigue}</p>
							</div>
						)}
					</div>
				</div>
				<div className={styles['block-characteristic__main-characteristic']}>
					<p className={styles['block-characteristic__paragraph']}>
						{strongCard(newCard.characteristics)}
					</p>
				</div>
			</div>
			<div className={cn(styles['block-description'])}>
				{newCard.description}
			</div>
		</div>
	);
};

export default Card;
