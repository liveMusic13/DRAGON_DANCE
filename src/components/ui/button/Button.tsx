import cn from 'clsx';
import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import styles from './Button.module.scss';

interface IFuncButton {
	setViewShop?: Dispatch<SetStateAction<boolean>>;
	setVieCollection?: Dispatch<SetStateAction<boolean>>;
	setOpenBooster?: Dispatch<SetStateAction<boolean>>;
}

const Button: FC<PropsWithChildren<IFuncButton>> = ({
	children,
	setViewShop,
	setVieCollection,
	setOpenBooster,
}) => {
	return (
		<button
			className={cn({
				[styles.buttonViewShop]:
					setViewShop || setVieCollection || setOpenBooster,
			})}
			onClick={() =>
				setViewShop
					? setViewShop(false)
					: setVieCollection
					? setVieCollection(false)
					: setOpenBooster
					? setOpenBooster(false)
					: undefined
			}
		>
			{children}
		</button>
	);
};

export default Button;
