import conoil from '../../images/filling-stations/conoil/conoil002.jpg';
import nnpc from '../../images/filling-stations/nnpc/nnpc001.jpg';
import total from '../../images/filling-stations/total/total001.jpg';
import shell from '../../images/filling-stations/shell/shell001.jpg';
import caltex from '../../images/filling-stations/caltex/caltex001.jpg';

const FUEL_STATION_DATA = [
	{
		id: 1,
		title: 'Conoil',
		routeName: 'conoil',
		items: [
			{
				id: 1,
				name: 'Petrol;',
				imageUrl: conoil,
				price: 25,
			},
			{
				id: 2,
				name: 'Gasoline',
				imageUrl: conoil,
				price: 18,
			},
			{
				id: 3,
				name: 'Diesel',
				imageUrl: conoil,
				price: 35,
			},
			{
				id: 4,
				name: 'Cooking Gas',
				imageUrl: conoil,
				price: 25,
			},
			{
				id: 5,
				name: 'Kerosene',
				imageUrl: conoil,
				price: 18,
			},
			{
				id: 6,
				name: 'Jet Fuel',
				imageUrl: conoil,
				price: 14,
			},
			{
				id: 7,
				name: 'Gasoline',
				imageUrl: conoil,
				price: 18,
			},
			{
				id: 8,
				name: 'Engine Oil',
				imageUrl: conoil,
				price: 14,
			},
			{
				id: 9,
				name: 'Hot Water',
				imageUrl: conoil,
				price: 16,
			},
		],
	},
	{
		id: 2,
		title: 'Total',
		routeName: 'total',
		items: [
			{
				id: 1,
				name: 'Kerosene',
				imageUrl: total,
				price: 220,
			},
			{
				id: 2,
				name: 'Gasoline',
				imageUrl: total,
				price: 280,
			},
			{
				id: 3,
				name: 'Cooking Gas',
				imageUrl: total,
				price: 110,
			},
			{
				id: 4,
				name: 'Engine Oil',
				imageUrl: total,
				price: 160,
			},
			{
				id: 5,
				name: 'Methane',
				imageUrl: total,
				price: 160,
			},
			{
				id: 6,
				name: 'Diesel',
				imageUrl: total,
				price: 160,
			},
			{
				id: 7,
				name: 'Petrol',
				imageUrl: total,
				price: 190,
			},
			{
				id: 8,
				name: 'Coal',
				imageUrl: total,
				price: 200,
			},
		],
	},
	{
		id: 3,
		title: 'Shell',
		routeName: 'shell',
		items: [
			{
				id: 1,
				name: 'Gasoline',
				imageUrl: shell,
				price: 125,
			},
			{
				id: 2,
				name: 'Cooking Gas',
				imageUrl: shell,
				price: 90,
			},
			{
				id: 3,
				name: 'Diesel',
				imageUrl: shell,
				price: 90,
			},
			{
				id: 4,
				name: 'Jet Fuel',
				imageUrl: shell,
				price: 165,
			},
			{
				id: 5,
				name: 'Engine Oil',
				imageUrl: shell,
				price: 185,
			},
		],
	},
	{
		id: 4,
		title: 'NNPC',
		routeName: 'nnpc',
		items: [
			{
				id: 1,
				name: 'Diesel',
				imageUrl: nnpc,
				price: 25,
			},
			{
				id: 2,
				name: 'Gasoline',
				imageUrl: nnpc,
				price: 20,
			},
			{
				id: 3,
				name: 'Kerosene',
				imageUrl: nnpc,
				price: 80,
			},
			{
				id: 4,
				name: 'Jet Fuel',
				imageUrl: nnpc,
				price: 80,
			},
			{
				id: 5,
				name: 'Methane',
				imageUrl: nnpc,
				price: 45,
			},
			{
				id: 6,
				name: 'Cooking Gas',
				imageUrl: nnpc,
				price: 135,
			},
			{
				id: 7,
				name: 'Coal',
				imageUrl: nnpc,
				price: 20,
			},
		],
	},
	{
		id: 5,
		title: 'Caltex',
		routeName: 'caltex',
		items: [
			{
				id: 1,
				name: 'Cooking Gas',
				imageUrl: caltex,
				price: 325,
			},
			{
				id: 2,
				name: 'Kerosene',
				imageUrl: caltex,
				price: 20,
			},
			{
				id: 3,
				name: 'Gasoline',
				imageUrl: caltex,
				price: 25,
			},
			{
				id: 4,
				name: 'Diesel',
				imageUrl: caltex,
				price: 25,
			},
			{
				id: 5,
				name: 'Jet Fuel',
				imageUrl: caltex,
				price: 40,
			},
			{
				id: 6,
				name: 'Petrol',
				imageUrl: caltex,
				price: 25,
			},
		],
	},
];
export default FUEL_STATION_DATA;
