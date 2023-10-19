import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../ui/button/Button';
import Card from '../ui/card/Card';
import CreateNameDeck from '../ui/create-name-deck/CreateNameDeck';
import MakeCardDeck from '../ui/make-card-deck/MakeCardDeck';
import styles from './MyCollection.module.scss';

interface IViewCollection {
	setVieCollection: Dispatch<SetStateAction<boolean>>;
}

const MyCollection: FC<IViewCollection> = ({ setVieCollection }) => {
	const { users } = useSelector(state => state);
	const { countPlayers } = useSelector(state => state);
	const [isViewCreateNameDeck, setIsViewCreateNameDeck] =
		useState<boolean>(false);
	const [isViewMakeCardDeck, setIsViewMakeCardDeck] = useState<boolean>(false);

	const [cardDeck, setCardDeck] = useState('');

	const [indexCard, setIndexCard] = useState(0);

	const nextPageCard = () => {
		if (
			indexCard <=
			users[countPlayers.count].collectionCard.fullCollection.length - 6 //HELP: Ставлю -6 т.к. по 5 карт прибавляю при отображении и если я поставлю просто длинну, то она будет равна 15 и при проверке, когда индекс будет равен 10, оно проверит что все норм 15 меньше 10, и перегартнет дальше, на пустую страницу. А так будет длинна допустим 15 минус 6 это 9, и проверка не пройдет, значит функция перегартывания не пройдет
		)
			setIndexCard(prev => prev + 5);
	};

	const prevPageCard = () => {
		if (indexCard > 0) setIndexCard(prev => prev - 5);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__deckCard}>
				<h2 className={styles.block__deckCard_title}>Ваши колоды</h2>
				<div className={styles.block__deckCard_deck}>
					<button
						className={styles.block__createADeck}
						onClick={() => setIsViewCreateNameDeck(!isViewCreateNameDeck)}
					>
						&#43;
					</button>
					{users[countPlayers.count].collectionCard.cardDeck.map(deck => {
						return (
							<p
								onClick={() => {
									setCardDeck(deck.name);
									console.log(cardDeck);
									setIsViewMakeCardDeck(!isViewMakeCardDeck);
								}}
							>
								{deck.name}
							</p>
						);
					})}
					{isViewMakeCardDeck && <MakeCardDeck cardDeck={cardDeck} />}
					{isViewCreateNameDeck && (
						<CreateNameDeck setIsViewCreateNameDeck={setIsViewCreateNameDeck} />
					)}
				</div>
			</div>
			<div className={styles.block__card}>
				<h2 className={styles.block__card_title}>Ваши карты</h2>
				<div className={styles.block__card__fullCollection}>
					{users[countPlayers.count].collectionCard.fullCollection
						.slice(indexCard, indexCard + 5)
						.map(card => {
							return (
								<Card
									key={Math.random()}
									collection={true}
									newCard={card}
									cardDeck={cardDeck}
								/>
							);
						})}
				</div>
			</div>
			<div className={styles.block__switchCard}>
				<button onClick={prevPageCard}>&#171;</button>
				<button onClick={nextPageCard}>&#187;</button>
			</div>
			<Button setVieCollection={setVieCollection}>Назад</Button>
		</div>
	);
};

export default MyCollection;
