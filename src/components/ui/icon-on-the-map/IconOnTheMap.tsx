import React, { FC, PropsWithChildren } from 'react';
import styles from './IconOnTheMap.module.scss';

interface IPropsIcon {
	img: string;
	house: string;
}

const IconOnTheMap: FC<PropsWithChildren<IPropsIcon>> = ({
	children,
	img,
	house,
}) => {
	return (
		<div className={styles[`wrapper__${house}`]}>
			<img src={img} alt='imageHouse' />
			<p>{children}</p>
		</div>
	);
};

export default IconOnTheMap;
