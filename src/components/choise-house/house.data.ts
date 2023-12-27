export interface IHouse {
	id: number;
	name: string;
	image: string;
}

const house: IHouse[] = [
	{
		id: 1,
		name: 'Старк',
		image: './images/choise-house/House_Stark.svg',
	},
	{
		id: 2,
		name: 'Ланнистер',
		image: './images/choise-house/House_Lannister.svg',
	},
	{
		id: 3,
		name: 'Таргариен',
		image: './images/choise-house/House_Targaryen.svg',
	},
	{
		id: 4,
		name: 'Грейджой',
		image: './images/choise-house/House_Grayjoy.png',
	},
	{
		id: 5,
		name: 'Аррен',
		image: './images/choise-house/House_ArrynSigil.png',
	},
	{
		id: 6,
		name: 'Баратеон',
		image: './images/choise-house/House_Baratheon.svg',
	},
	{
		id: 7,
		name: 'Веларион',
		image: './images/choise-house/House_Velarion.png',
	},
	{
		id: 8,
		name: 'Мартел',
		image: './images/choise-house/House_Martel.png',
	},
	{
		id: 9,
		name: 'Хайтауэр',
		image: './images/choise-house/House_Hightower.svg',
	},
];

export default house;
