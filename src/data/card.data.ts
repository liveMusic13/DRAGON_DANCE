//как будет происходить выбор в бустер? в начале будет проверяться вероятность получить карту дома либо нейтральную (допустим 25 на 75), потом проверка на редкость (см. в чат gpt), после если карта дома, то допустим cardHome.rare.stark[случайное число] или если нейтралка, то cardNeutral.regular[случайное число]

import { IRarity, IRarityHouse } from '../types/card.types';

export const cardHome: IRarityHouse = {
	regular: {
		stark: [
			{
				id: 29,
				house: 'stark',
				type: 'human',
				rarity: 'regular',
				name: 'Ходор',
				image: './images/image_card/stark/regular/human/Hodor.jpg',
				characteristics: {
					attack: 10,
					defence: 2,
					health: 5,
					move: 1,
				},
				description:
					'Ходор — слабоумный конюх на службе у Старков, позднее — личный слуга Брана Старка. Его настоящее имя Уолдер, прозвище «Ходор» — это единственное слово, которое он может выговорить.',
			},
			{
				id: 36,
				house: 'stark',
				type: 'human',
				rarity: 'regular',
				name: 'Нэн',
				image: './images/image_card/stark/regular/human/Nan.jpg',
				characteristics: {
					health: 13,
					move: 1,
				},
				description:
					'Нэн, более известная как Старая Нэн — старая служанка в Винтерфелле, нянька при нескольких поколениях Старков. Это самая старая жительница Винтерфелла, Ходор приходится ей правнуком.',
			},
			{
				id: 37,
				house: 'stark',
				type: 'human',
				rarity: 'regular',
				name: 'Джори Кассель',
				image: './images/image_card/stark/regular/human/Jory_Cassel.jpg',
				characteristics: {
					attack: 7,
					defence: 6,
					health: 5,
					move: 1,
				},
				description:
					'Джо́ри Кассе́ль — представитель дома Касселей, капитан домашней гвардии Старков.',
			},
			{
				id: 38,
				house: 'stark',
				type: 'human',
				rarity: 'regular',
				name: 'Мейстер Лювин',
				image: './images/image_card/stark/regular/human/Lewin.jpg',
				characteristics: {
					attack: 1,
					defence: 1,
					health: 10,
					move: 1,
					intrigue: 1,
					influence: 3,
				},
				description:
					'Ме́йстер Лю́вин — мейстер Винтерфелла. Он служит дому Старков уже много лет, принимал все роды Кейтилин Старк.',
			},
		],
		velaryon: [],
		targarien: [
			{
				id: 30,
				house: 'targaryen',
				type: 'human',
				rarity: 'regular',
				name: 'Эйгон III Таргариен',
				image: './images/image_card/targarien/regular/human/Aegon_III.jpg',
				characteristics: {
					attack: 3,
					defence: 3,
					health: 7,
					move: 1,
					influence: 16,
				},
				description:
					'Король Эйгон III Таргариен по прозвищу Драконья Погибель — седьмой король Семи Королевств из династии Таргариенов, старший сын Рейниры и Деймона Таргариенов.',
			},
			{
				id: 41,
				house: 'none',
				type: 'human',
				rarity: 'regular',
				name: 'Визерис III Таргариен',
				image: './images/image_card/targarien/regular/human/Viserys_III.jpg',
				characteristics: {
					attack: 2,
					defence: 3,
					health: 7,
					move: 1,
					influence: 14,
				},
				description:
					'Принц Визе́рис Тарга́риен — младший сын короля Эйриса II Таргариена, брат Рейгара и Дейнерис Таргариен.Визерис являлся жестоким, слабым, боязливым, нетерпеливым, тщеславным, жадным и глупым человеком.',
			},
			{
				id: 44,
				house: 'targaryen',
				type: 'human',
				rarity: 'regular',
				name: 'Эйгон IV Таргариен',
				image: './images/image_card/targarien/regular/human/Aegon_IV.jpg',
				characteristics: {
					attack: 1,
					defence: 1,
					health: 3,
					move: 1,
					influence: 10,
				},
				description:
					'Король Эйгон IV Таргариен по прозвищу Недостойный — одиннадцатый король Семи Королевств из династии Таргариенов. Эйгон IV, один из худших королей на Железном троне, был сладострастным и некомпетентным правителем, потакавшим своим прихотям, за что и получил свое прозвище.',
			},
		],
		lannister: [
			{
				id: 34,
				house: 'lannister',
				type: 'human',
				rarity: 'regular',
				name: 'Лансель Ланнистер',
				image: './images/image_card/lanister/rare/human/Lancel_Lannister.jpg',
				characteristics: {
					attack: 4,
					defence: 4,
					health: 7,
					move: 1,
					influence: 1,
					intrigue: 2,
				},
				description:
					'Сир Лансель Ланнистер — старший сын Кивана Ланнистера и Дорны Свифт, бывший оруженосец короля Роберта Баратеона, посвященный в рыцари после смерти последнего.',
			},
			{
				id: 46,
				house: 'lannister',
				type: 'human',
				rarity: 'regular',
				name: 'Титос Ланнистер',
				image: './images/image_card/lanister/regular/human/Tytos-lannister.jpg',
				characteristics: {
					attack: 2,
					defence: 4,
					health: 10,
					move: 1,
					influence: 3,
				},
				description:
					'Ти́тос Ла́ннистер — лорд Утёса Кастерлии, Хранитель Запада. Добродушный, веселый, щедрый и добрый Титос был прозван Смеющимся Львом. Титос был также крайне слабовольным, жаждущим угодить, медленным до гнева, быстрым до прощения и слишком доверчивым.',
			},
			{
				id: 47,
				house: 'lannister',
				type: 'human',
				rarity: 'regular',
				name: 'Джоанна Ланнистер',
				image:
					'./images/image_card/lanister/regular/human/Joanna_Lannister.jpg',
				characteristics: {
					health: 9,
					move: 1,
					influence: 6,
				},
				description:
					'Леди Джоа́нна Ла́ннистер — двоюродная сестра и жена лорда Тайвина Ланнистера. Ее влияние на него было таким, что в народе говорили, будто бы страной управляет Тайвин Ланнистер, а Тайвином — его жена.',
			},
		],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
	rare: {
		stark: [
			{
				id: 27,
				house: 'stark',
				type: 'human',
				rarity: 'rare',
				name: 'Рикон Старк',
				image: './images/image_card/stark/rare/human/Rickon_Stark.jpg',
				characteristics: {
					attack: 4,
					defence: 5,
					health: 9,
					move: 1,
					influence: 6,
				},
				description:
					'Ри́кон Старк — младший сын Эддарда Старка и Кейтилин Старк. Веселый, обаятельный и жизнерадостный ребенок, но даже в малом возрасте проявляюший темпераментность и присущее Старкам чувство собственного достоинства.',
			},
			{
				id: 39,
				house: 'stark',
				type: 'human',
				rarity: 'rare',
				name: 'Родрик Кассель',
				image: './images/image_card/stark/regular/human/Rodrik_Cassel.jpg',
				characteristics: {
					attack: 6,
					defence: 8,
					health: 8,
					move: 1,
					influence: 1,
				},
				description:
					'Сир Родрик Кассель — глава дома Касселей, рыцарь на службе у Старков, мастер над оружием в Винтерфелле, позже кастелян замка.',
			},
			{
				id: 40,
				house: 'none',
				type: 'effect',
				rarity: 'rare',
				name: 'Винтерфелл',
				image: './images/image_card/stark/rare/effect/winterfell.jpeg',
				characteristics: {
					defence: 4,
					influence: 1,
				},
				description:
					'Ви́нтерфе́лл — родовой замок Старков, откуда те правят Севером. Расположен в центре региона, на восточной окраине Волчьего леса, к западу от Белого Ножа и юго-западу от Длинного озера. По преданиям, Винтерфелл был построен Брандоном Строителем 8000 лет назад.',
			},
		],
		velaryon: [],
		targarien: [
			{
				id: 31,
				house: 'targaryen',
				type: 'human',
				rarity: 'rare',
				name: 'Дейрон Таргариен',
				image: './images/image_card/targarien/rare/human/Daeron.jpg',
				characteristics: {
					attack: 7,
					defence: 7,
					health: 8,
					move: 1,
					influence: 7,
				},
				description:
					'Король Эйгон III Таргариен по прозвищу Драконья Погибель — седьмой король Семи Королевств из династии Таргариенов, старший сын Рейниры и Деймона Таргариенов.',
			},
			{
				id: 43,
				house: 'targaryen',
				type: 'human',
				rarity: 'rare',
				name: 'Визерис I Таргариен',
				image: './images/image_card/targarien/rare/human/Viserys_I.jpg',
				characteristics: {
					attack: 5,
					defence: 3,
					health: 5,
					move: 1,
					influence: 19,
					intrigue: 2,
				},
				description:
					'Визерис I Таргариен — пятый король Семи Королевств из династии Таргариенов. Король Визерис был великодушен, открыт, любезен, дружелюбен и щедр, любим как лордами, так и простым людом. Он был мирным человеком, полным, веселым и приятным на вид.',
			},
			{
				id: 45,
				house: 'targaryen',
				type: 'human',
				rarity: 'rare',
				name: 'Рейнис Таргариен',
				image: './images/image_card/targarien/rare/human/Rhaenys_Targaryen.jpg',
				characteristics: {
					attack: 2,
					defence: 4,
					health: 10,
					move: 1,
					influence: 6,
					intrigue: 3,
				},
				description:
					'Принцесса Рейнис Таргариен по прозвищу Почти Королева. была умной, способной, энергичной, гордой, неистовой и бесстрашной женщиной. У нее был вспыльчивый нрав. Принцесса была опытной драконьей всадницей, её драконом была Мелеис.',
			},
		],
		lannister: [
			{
				id: 33,
				house: 'lannister',
				type: 'human',
				rarity: 'rare',
				name: 'Киван Ланнистер',
				image: './images/image_card/lanister/rare/human/Kevan_Lannister.jpg',
				characteristics: {
					attack: 6,
					defence: 6,
					health: 10,
					move: 1,
					influence: 8,
					intrigue: 1,
				},
				description:
					'Сир Киван Ланнистер — младший брат Тайвина Ланнистера, который всю жизнь оставался в его тени, будучи преданным и исполнительным помощником.',
			},
			{
				id: 48,
				house: 'lannister',
				type: 'human',
				rarity: 'rare',
				name: 'Серсея Ланнистер',
				image: './images/image_card/lanister/rare/human/Cersei_Lannister.jpg',
				characteristics: {
					attack: 1,
					defence: 1,
					health: 7,
					move: 1,
					influence: 14,
					intrigue: 12,
				},
				description:
					'Серсе́я Ла́ннистер — дочь лорда Тайвина Ланнистера и леди Джоанны Ланнистер. Серсея своенравна, горда, презрительна к окружающим. Чрезвычайно властолюбива и амбициозна. Полагает себя утонченной и проницательной. Раздражается, если люди не выполняют её поручений.',
			},
			{
				id: 49,
				house: 'lannister',
				type: 'human',
				rarity: 'rare',
				name: 'Джоффри Баратеон(Ланнистер)',
				image: './images/image_card/lanister/rare/human/Joffrey.jpg',
				characteristics: {
					attack: 3,
					defence: 3,
					health: 9,
					move: 1,
					influence: 10,
				},
				description:
					'Джо́ффри Баратео́н — второй король Семи Королевств. Хотя он мог при необходимости быть галантным и вежливым, на деле он обладал дурным неконтролируемым характером, унаследовав худшие черты своей матери, родного отца и деда: был капризен, честолюбив, малодушен, жесток, немилосерден, лжив, кроме этого, имел выраженную садистскую жилку.',
			},
			{
				id: 50,
				house: 'lannister',
				type: 'human',
				rarity: 'rare',
				name: 'Тирион Ланнистер',
				image: './images/image_card/lanister/rare/human/Joffrey.jpg',
				characteristics: {
					attack: 4,
					defence: 1,
					health: 5,
					move: 1,
					influence: 11,
					intrigue: 16,
				},
				description:
					'Ти́рион Ла́ннистер, также известный как Бес и Полумуж. Не располагая физической силой, ростом и красотой, но имея знатное происхождение, хорошее образование, богатство, ум и начитанность, Тирион Ланнистер умеет добиваться своих целей лучше, чем многие из тех, кто окружал его, хотя и получает мало уважения и часто высмеивается по причине своего уродства',
			},
		],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
	epic: {
		stark: [
			{
				id: 26,
				house: 'stark',
				type: 'human',
				rarity: 'epic',
				name: 'Санса Старк',
				image: './images/image_card/stark/epic/human/Sansa_Stark.jpg',
				characteristics: {
					defence: 1,
					health: 15,
					move: 1,
					influence: 13,
					intrigue: 12,
				},
				description:
					'Санса Старк — старшая дочь лорда Эддарда Старка и Кейтилин Старк. Мечтательная и мягкая, она грезила балладами о доблестных рыцарях и прекрасных дамах, но, оказавшись в суровых условиях реальности, сумела найти в себе достаточно сил, чтобы приспособиться к ним и выжить.',
			},
		],
		velaryon: [],
		targarien: [
			{
				id: 32,
				house: 'targaryen',
				type: 'human',
				rarity: 'epic',
				name: 'Эймонд Таргариен',
				image: './images/image_card/targarien/epic/human/Aemond_Targaryen.jpg',
				characteristics: {
					attack: 15,
					defence: 6,
					health: 9,
					move: 1,
					influence: 9,
					intrigue: 5,
				},
				description:
					'Принц Э́ймонд Тарга́риен — второй сын Визериса I и его второй супруги Алисенты Хайтауэр, родной младший брат Эйгона II и единокровный брат Рейниры. Был наездником дракона Вхагар, ранее принадлежавшей Висенье Таргариен.',
			},
		],
		lannister: [
			{
				id: 35,
				house: 'lannister',
				type: 'human',
				rarity: 'epic',
				name: 'Джейме Ланнистер',
				image: './images/image_card/lanister/epic/human/Jaime_Lannister.jpg',
				characteristics: {
					attack: 17,
					defence: 8,
					health: 9,
					move: 1,
					influence: 9,
				},
				description:
					'Сир Дже́йме Ла́ннистер по прозвищу Цареубийца - прирожденный воин, знаменитый фехтовальщик, неоднократный победитель турниров, не интересующийся политикой и придворными интригами.',
			},
		],
		baratheon: [],
		arryn: [],
		grayjoy: [],
		martel: [],
		hightower: [],
	},
	legendary: {
		stark: [
			{
				id: 17,
				house: 'stark',
				type: 'human',
				rarity: 'legendary',
				name: 'Эддард Старк',
				image: './images/image_card/stark/legendary/human/Eddard_Stark.jpg',
				characteristics: {
					attack: 10,
					defence: 15,
					health: 13,
					move: 1,
					influence: 15,
				},
				description:
					'Лорд Эддард Старк, также известный как Тихий Волк — глава дома Старков, лорд Винтерфелла и Хранитель Севера. Kрайне благородный и честный человек, любящий супруг и отец.',
			},
		],
		velaryon: [
			{
				id: 18,
				house: 'velaryon',
				type: 'human',
				rarity: 'legendary',
				name: 'Корлис Веларион',
				image:
					'./images/image_card/velarion/legendary/human/Corlys_Velaryon.jpg',
				characteristics: {
					attack: 7,
					defence: 7,
					health: 12,
					move: 1,
					influence: 19,
					intrigue: 13,
				},
				description:
					'Лорд Ко́рлис Вела́рион, также известный как Морской Змей — знаменитый мореплаватель и политик времен Танца Драконов, лорд Приливов и владетель Дрифтмарка. Во времена Морского Змея дом Веларионов достиг вершины своего могущества.',
			},
		],
		targarien: [
			{
				id: 16,
				house: 'targaryen',
				type: 'human',
				rarity: 'legendary',
				name: 'Дейнерис Таргариен',
				image: './images/image_card/targarien/legendary/human/Daenerys.jpg',
				characteristics: {
					attack: 2,
					defence: 3,
					health: 20,
					move: 1,
					influence: 19,
					intrigue: 6,
				},
				description:
					'Принцесса Дейне́рис Тарга́риен по прозвищу Бурерожденная — последняя представительница дома Таргариенов, дочь короля Эйриса II Безумного и его сестры-жены Рейлы, младшая сестра принцев Рейгара и Визериса Таргариенов.',
			},
			{
				id: 42,
				house: 'targaryen',
				type: 'human',
				rarity: 'legendary',
				name: 'Балерион (Дракон)',
				image: './images/image_card/targarien/regular/human/Viserys_III.jpg',
				characteristics: {
					attack: 20,
					defence: 20,
					health: 20,
					move: 6,
					influence: 20,
				},
				description:
					'Балериóн, известный также под прозвищем Чёрный Ужас был самым большим драконом, которым когда-либо владели Таргариены, и единственным драконом из старой Валирии, дожившим до Завоевания Вестероса, именно он сжёг замок Харренхолл.',
			},
		],
		lannister: [
			{
				id: 19,
				house: 'lannister',
				type: 'human',
				rarity: 'legendary',
				name: 'Тайвин Ланнистер',
				image:
					'./images/image_card/lanister/legendary/human/Tayvin_Lanister.jpg',
				characteristics: {
					attack: 8,
					defence: 7,
					health: 8,
					move: 1,
					influence: 19,
					intrigue: 16,
				},
				description:
					'Лорд Та́йвин Ла́ннистер — глава дома Ланнистеров, лорд Утёса Кастерли, Щит Ланниспорта и Хранитель Запада. Один из самых могущественных лордов Семи Королевств и, без сомнения, самый богатый.',
			},
		],
		baratheon: [
			{
				id: 20,
				house: 'baratheon',
				type: 'human',
				rarity: 'legendary',
				name: 'Роберт Баратеон',
				image:
					'./images/image_card/baratheon/legendary/human/Robert_Baratheon.jpg',
				characteristics: {
					attack: 20,
					defence: 5,
					health: 10,
					move: 1,
					influence: 19,
					intrigue: 2,
				},
				description:
					'Король Ро́берт Баратео́н — первый король Семи Королевств из династии Баратеонов. Роберт пришёл к власти, подняв восстание и свергнув безумного Эйриса II Таргариена.',
			},
		],
		arryn: [
			{
				id: 21,
				house: 'arryn',
				type: 'human',
				rarity: 'legendary',
				name: 'Джон Аррен',
				image: './images/image_card/arryn/legendary/human/Jon_arryn.jpg',
				characteristics: {
					attack: 5,
					defence: 13,
					health: 13,
					move: 1,
					influence: 17,
					intrigue: 1,
				},
				description:
					'Лорд Джон Аррен — лорд Орлиного Гнезда, Хранитель Востока и глава дома Арренов, десница при короле Роберте Баратеоне. В детстве в Орлином Гнезде у Джона Аррена воспитывались Эддард Старк и Роберт Баратеон.',
			},
		],
		grayjoy: [
			{
				id: 22,
				house: 'grayjoy',
				type: 'human',
				rarity: 'legendary',
				name: 'Эурон Грейджой',
				image: './images/image_card/greygoy/legendary/human/Euron.jpg',
				characteristics: {
					attack: 14,
					defence: 9,
					health: 10,
					move: 1,
					influence: 6,
					intrigue: 3,
				},
				description:
					'Э́урон Гре́йджой по прозвищу Вороний Глаз — один из представителей дома Грейджоев, брат Бейлона Грейджоя, знаменитый пират. Это жестокий, властный и очень странный человек, которого многие считают безумным, но мало кто решается заявить об этом ему в лицо.',
			},
		],
		martel: [
			{
				id: 23,
				house: 'martel',
				type: 'human',
				rarity: 'legendary',
				name: 'Оберин Мартелл',
				image: './images/image_card/martel/legendary/human/Oberyn_Martell.jpg',
				characteristics: {
					attack: 20,
					defence: 9,
					health: 8,
					move: 1,
					influence: 8,
					intrigue: 8,
				},
				description:
					'Принц Обери́н Марте́лл, также известный как Красный Змей — принц, младший брат правителя Дорна Дорана Мартелла. Оберин пользуется дурной славой завзятого дуэлянта и отравителя.',
			},
		],
		hightower: [
			{
				id: 23,
				house: 'hightower',
				type: 'human',
				rarity: 'legendary',
				name: 'Отто Хайтауэр',
				image:
					'./images/image_card/hightower/legendary/human/Otto_hightower.jpg',
				characteristics: {
					attack: 4,
					defence: 5,
					health: 11,
					move: 1,
					influence: 15,
					intrigue: 18,
				},
				description:
					'Сир Отто Хайтауэр — рыцарь из дома Хайтауэров, десница трех королей: Джейхейриса I, Визериса I и Эйгона II. Способный человек, в том все соглашались, хотя немало было таких, кто находил его гордым, несдержанным и высокомерным.',
			},
		],
	},
};

export const cardNeutral: IRarity = {
	regular: [
		{
			id: 1,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Ополченец',
			image: './images/image_card/neutral/regular/standart-card/krestyanin.jpg',
			characteristics: {
				attack: 2,
				health: 3,
				move: 1,
			},
			description:
				'Ополченцы - неопытные, но решительные крестьяне, вступившие в борьбу за свои земли.',
		},
		{
			id: 2,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Мечник (Щит и меч)',
			image: './images/image_card/neutral/regular/standart-card/vanguard.jpg',
			characteristics: {
				attack: 3,
				defence: 3,
				health: 4,
				move: 1,
			},
			description:
				'Мечник с Щитом и Мечом - обладает балансом между атакой и защитой, что делает его надежным сторонником на поле боя.',
		},
		{
			id: 3,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Мечник (Двуручный меч)',
			image: './images/image_card/neutral/regular/standart-card/swordsman.jpg',
			characteristics: {
				attack: 5,
				defence: 1,
				health: 4,
				move: 1,
			},
			description:
				'Мечник с Двуручным Мечом - сосредоточен на нанесении максимального урона в ближнем бою и готов встретить любой вызов на поле сражения.',
		},
		{
			id: 4,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Копейщик',
			image: './images/image_card/neutral/regular/standart-card/spearman.jpg',
			characteristics: {
				attackAgainstCavalry: 6,
				defence: 1,
				health: 3,
				move: 1,
			},
			description: 'Антикавалерийский юнит',
		},
		{
			id: 5,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Лучник',
			image: './images/image_card/neutral/regular/standart-card/archer.jpg',
			characteristics: {
				rangedAttack: 6,
				defence: 1,
				health: 3,
				move: 1,
			},
			description:
				'Лучник - искусный стрелок, владеющий мастерством стрельбы из лука и способный точно поражать цели.',
		},
		{
			id: 6,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Кавалерия',
			image: './images/image_card/neutral/regular/standart-card/cavalery.jpg',
			characteristics: {
				rangedAttack: 6,
				defence: 3,
				health: 3,
				move: 3,
			},
			description:
				'Кавалерия - быстрые воины на конях, наносят мощные атаки с разгона и маневрируют на поле боя.',
		},
		{
			id: 7,
			house: 'none',
			type: 'effect',
			rarity: 'regular',
			name: 'Туман (test)',
			image: './images/image_card/neutral/regular/effect-card/tuman.webp',
			characteristics: {
				rangedAttack: -3,
			},
			description:
				'Погружает поле битвы в густой мрак, уменьшая эффективность лучников на поле боя',
		},
		{
			id: 10,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Подрик Пейн',
			image: './images/image_card/neutral/regular/human/Podrick_Pain.jpg',
			characteristics: {
				attack: 5,
				defence: 4,
				health: 5,
				move: 1,
				influence: 1,
			},
			description:
				'Подрик Пейн — представитель дома Пейнов, оруженосец Тириона Ланнистера.',
		},
		{
			id: 12,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Илин Пейн',
			image: './images/image_card/neutral/regular/human/Ilyn_Payne.jpg',
			characteristics: {
				attack: 6,
				defence: 2,
				health: 5,
				move: 1,
				influence: 1,
			},
			description:
				'Подрик Пейн — представитель дома Пейнов, оруженосец Тириона Ланнистера.',
		},
		{
			id: 13,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Янос Слинт',
			image: './images/image_card/neutral/regular/human/Janos_slynt.jpg',
			characteristics: {
				attack: 3,
				defence: 4,
				health: 5,
				move: 1,
			},
			description:
				'Лорд Янос Слинт — командующий городской стражи Королевской Гавани, позже лорд Харренхолла, а затем брат Ночного Дозора.',
		},
		{
			id: 14,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Шая',
			image: './images/image_card/neutral/regular/human/Janos_slynt.jpg',
			characteristics: {
				attack: 2,
				health: 5,
				move: 1,
				intrigue: 1,
				influence: 3,
			},
			description:
				'Шая — молодая проститутка из Речных Земель, впоследствии любовница Тириона Ланнистера.',
		},
		{
			id: 15,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Миссандея',
			image: './images/image_card/neutral/regular/human/Missandei.jpg',
			characteristics: {
				defence: 1,
				health: 6,
				move: 1,
				influence: 4,
			},
			description:
				'Миссандея — малолетняя рабыня-переводчица в Астапоре родом из Наата, позже служанка Дейнерис Таргариен.',
		},
		{
			id: 51,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Великий мейстер Пицель ',
			image: './images/image_card/neutral/regular/human/Pycelle.jpg',
			characteristics: {
				health: 7,
				move: 1,
				influence: 1,
				intrigue: 5,
			},
			description:
				'За внешней важностью Пицеля скрывается довольно трусливая и мелкая душа, готовая в любой момент прогнуться перед любой властной волей; Серсея Ланнистер характеризовала его как «престарелого лизоблюда», тупого и недальновидного.',
		},
		{
			id: 53,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Уолдер Фрей',
			image: './images/image_card/neutral/regular/human/Walder_frey.jpg',
			characteristics: {
				health: 9,
				move: 1,
				influence: 2,
				intrigue: 4,
			},
			description:
				'Лорд Уолдер Фрей — лорд Переправы и престарелый глава дома Фреев. Долголетие Уолдера Фрея отчасти связано с его исключительной осторожностью, доходящей до трусости и прямого предательства — он заботится прежде всего о себе, собственных детях и внуках, а уже потом о всем прочем, стараясь всякий раз принять сторону победителя.',
		},
		{
			id: 54,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Иллирио Мопатис',
			image: './images/image_card/neutral/regular/human/Illyrio_Mopatis.jpg',
			characteristics: {
				health: 10,
				move: 1,
				influence: 3,
				intrigue: 7,
			},
			description:
				'Иллирио Мопатис — магистр Вольного города Пентоса, очень богатый и могущественный человек, торгующий пряностями, самоцветами, драконьей костью и другими, менее драгоценными вещами.',
		},
		{
			id: 55,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Салладор Саан',
			image: './images/image_card/neutral/regular/human/Salladhor_Saan.jpg',
			characteristics: {
				attack: 5,
				defence: 2,
				health: 10,
				move: 1,
				influence: 1,
				intrigue: 1,
			},
			description:
				'Са́лладор Саа́н — известный лисенийский пират из дома Саанов, имеющий собственный флот, близкий друг Давоса Сиворта. Это очень богатый человек, одновременно являющийся контрабандистом, торговцем, банкиром и пиратом.',
		},
		{
			id: 56,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Мелисандра',
			image: './images/image_card/neutral/regular/human/Melisandre.jpg',
			characteristics: {
				health: 15,
				move: 1,
				influence: 6,
				intrigue: 1,
			},
			description:
				'Мелисандра — жрица Рглора, заклинательница теней из Асшая, советница и наперсница Станниса Баратеона. Под влиянием Мелисандры Станнис сжег статуи Семерых в септе Драконьего Камня и поместил огненное сердце Рглора на свое знамя.',
		},
		{
			id: 62,
			house: 'none',
			type: 'human',
			rarity: 'regular',
			name: 'Оша',
			image: './images/image_card/neutral/rare/human/Osha.jpg',
			characteristics: {
				attack: 4,
				defence: 3,
				health: 10,
				move: 1,
				intrigue: 1,
			},
			description:
				'Оша — женщина из одичалых из-за Стены, находящаяся в услужении у дома Старков. Это очень высокая, на голову выше Робба, худая, сильная и жилистая женщина, с покрытым шрамами телом.',
		},
	],
	rare: [
		{
			id: 8,
			house: 'none',
			type: 'human',
			rarity: 'rare',
			name: 'Мисария',
			image: './images/image_card/neutral/rare/human/Mysaria.png',
			characteristics: {
				attack: 1,
				health: 3,
				move: 1,
				influence: 5,
				intrigue: 9,
			},
			description:
				'Леди Миса́рия, также известная как Горе и Бледная Пиявка — лиснийская танцовщица, любовница принца Деймона Таргариена. Была мастером над шептунами при чёрных во время Танца Драконов.',
		},
		{
			id: 9,
			house: 'none',
			type: 'human',
			rarity: 'rare',
			name: 'Бриенна Тарт',
			image: './images/image_card/neutral/rare/human/Brienne_Tarth.jpg',
			characteristics: {
				attack: 7,
				defence: 10,
				health: 9,
				move: 1,
				influence: 1,
			},
			description:
				'Бриенна, будучи некрасивой, но очень крупной и сильной женщиной, с детства увлекалась воинским искусством и мечтала о звании рыцаря.',
		},
		{
			id: 11,
			house: 'none',
			type: 'human',
			rarity: 'rare',
			name: 'Сандор Клиган',
			image: './images/image_card/neutral/rare/human/Sandor_Clegane.jpg',
			characteristics: {
				attack: 11,
				defence: 4,
				health: 9,
				move: 1,
			},
			description:
				'Сандо́р Клиган по прозвищу Пес. Прозвище «Пес» связано не только с гербом его дома, изображающим трех собак, но и с его свирепым характером и беспрекословным послушанием хозяевам.',
		},
		{
			id: 59,
			house: 'none',
			type: 'human',
			rarity: 'rare',
			name: 'Сирио Форель',
			image: './images/image_card/neutral/rare/human/Syrio_Forell.jpg',
			characteristics: {
				attack: 13,
				defence: 8,
				health: 5,
				move: 1,
			},
			description:
				'Сирио Форель — фехтовальщик из Браавоса, нанятый Эддардом Старком в Королевской Гавани в качестве наставника для своей дочери Арьи. Сирио — очень умелый боец, в прошлом занимавший место Первого Меча Морского владыки Браавоса.',
		},
		{
			id: 60,
			house: 'none',
			type: 'human',
			rarity: 'rare',
			name: 'Рикард Карстарк',
			image: './images/image_card/neutral/rare/human/Rickard_Karstark.jpg',
			characteristics: {
				attack: 7,
				defence: 8,
				health: 10,
				move: 1,
			},
			description:
				'Лорд Рикард Карстарк — глава дома Карстарков и лорд Кархолда. Он суровый и мстительный человек, а также свирепый воин. Он никогда не ревел, как Большой Джон Амбер, но в гневе столь же опасен.',
		},
		{
			id: 61,
			house: 'none',
			type: 'human',
			rarity: 'rare',
			name: 'Джон Амбер',
			image: './images/image_card/neutral/rare/human/John_Amber.jpg',
			characteristics: {
				attack: 13,
				defence: 6,
				health: 10,
				move: 1,
			},
			description:
				'Лорд Джон Амбер — лорд Последнего Очага и глава дома Амберов. Лорд Амбер во многом напоминает ревущего великана, изображённого на гербе дома; свое прозвище Большой Джон получил из-за огромного роста и стати – он ростом с Ходора, то есть почти семь футов, и раза в два шире его в плечах.',
		},
	],
	epic: [
		{
			id: 24,
			house: 'none',
			type: 'human',
			rarity: 'epic',
			name: 'Рамси Сноу',
			image: './images/image_card/neutral/epic/human/Bolton_Ramsay.jpg',
			characteristics: {
				attack: 7,
				defence: 6,
				health: 6,
				move: 1,
				influence: 4,
				intrigue: 10,
			},
			description:
				'Рамси Сноу, после узаконивания Рамси Болтон — незаконнорожденный сын лорда Русе Болтона. Это патологический садист; он жесток, дик и необуздан, получает удовольствие от страданий других и очень любит старый обычай Болтонов сдирать кожу с врагов живьем.',
		},
		{
			id: 52,
			house: 'none',
			type: 'human',
			rarity: 'epic',
			name: 'Бронн',
			image: './images/image_card/neutral/epic/human/Bronn.jpg',
			characteristics: {
				attack: 12,
				defence: 6,
				health: 13,
				move: 1,
				influence: 1,
				intrigue: 5,
			},
			description:
				'Бронн – профессиональный наёмник. Человек, наделённый многими качествами: храбр, хитёр, решителен, предприимчив, дерзок, жесток, циничен, остёр на язык, отличный боец на мечах, неграмотен. Несмотря на свои недостатки, обладает своеобразной честностью.',
		},
		{
			id: 57,
			house: 'none',
			type: 'human',
			rarity: 'epic',
			name: 'Варис',
			image: './images/image_card/neutral/epic/human/Varys.jpg',
			characteristics: {
				health: 15,
				move: 1,
				influence: 6,
				intrigue: 20,
			},
			description:
				'Лорд Ва́рис по прозвищу Паук — мастер над шептунами, то есть шпионами, в королевском Малом Совете. Варис — иностранец, евнух из Вольных Городов. Он служил мастером над шептунами еще при Эйрисе II Безумном, а после победы восстания Роберта перешел на службу к новому королю.',
		},
		{
			id: 58,
			house: 'none',
			type: 'human',
			rarity: 'epic',
			name: 'Петир Бейлиш',
			image: './images/image_card/neutral/epic/human/Petyr_Baelish.jpg',
			characteristics: {
				attack: 2,
				defence: 1,
				health: 10,
				move: 1,
				influence: 8,
				intrigue: 20,
			},
			description:
				'Лорд Пе́тир Бе́йлиш, также известный как Мизинец — глава дома Бейлишей, Верховный лорд Трезубца и лорд Харренхолла, являвшийся мастером над монетой в королевском Малом совете.',
		},
	],
	legendary: [
		{
			id: 25,
			house: 'none',
			type: 'human',
			rarity: 'legendary',
			name: 'Оленна Тирелл',
			image: './images/image_card/neutral/legendary/human/Olenna_Tyrell.jpg',
			characteristics: {
				defence: 3,
				health: 20,
				move: 1,
				influence: 11,
				intrigue: 18,
			},
			description:
				'Леди Оле́нна Ти́релл, также известная как Королева Шипов. Несмотря на преклонный возраст, это сильная женщина, имеющая ясный ум и стальную волю. Для неё характерна чрезвычайно колкая и агрессивная манера общения, поэтому за спиной её называют Королевой Шипов.',
		},
		{
			id: 28,
			house: 'none',
			type: 'effect',
			rarity: 'legendary',
			name: 'Сила в единстве',
			image: './images/image_card/neutral/regular/effect-card/tuman.webp',
			characteristics: {
				health: 3,
			},
			description: '+ 3 к общей силе за каждую карту дома в вашей колоде.',
		},
	],
};
