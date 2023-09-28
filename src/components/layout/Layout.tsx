import React, { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

interface Ibackground {
	bgImage: string;
	bgSize: string;
}

const Layout: FC<PropsWithChildren<Ibackground>> = ({
	children,
	bgImage,
	bgSize,
}) => {
	return (
		<section
			className={styles.wrapper}
			style={{ backgroundImage: bgImage, backgroundSize: bgSize }}
		>
			{children}
		</section>
	);
};

export default Layout;
