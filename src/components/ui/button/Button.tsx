import cn from 'clsx';
import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import styles from './Button.module.scss';

interface IFuncButton {
	setViewShop?: Dispatch<SetStateAction<boolean>>;
	setVieCollection?: Dispatch<SetStateAction<boolean>>;
}

const Button: FC<PropsWithChildren<IFuncButton>> = ({
	children,
	setViewShop,
	setVieCollection,
}) => {
	return (
		<button
			className={cn({
				[styles.buttonViewShop]: setViewShop || setVieCollection,
			})}
			onClick={() =>
				setViewShop
					? setViewShop(false)
					: setVieCollection
					? setVieCollection(false)
					: undefined
			}
		>
			{children}
		</button>
	);
};

export default Button;
