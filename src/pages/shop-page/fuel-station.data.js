import {
	conoil,
	total,
	caltex,
	shell,
	nnpc,
} from '../../assets/images/filling-stations/fuel-station.images.js';

const FUEL_STATION_DATA = [
	{
		id: 1,
		title: 'Conoil',
		routeName: 'conoil',
		items: [
			{
				id: 91,
				name: 'Petrol;',
				imageUrl: conoil,
				price: 25,
			},
			{
				id: 72,
				name: 'Gasoline',
				imageUrl: conoil,
				price: 18,
			},
			{
				id: 83,
				name: 'Diesel',
				imageUrl: conoil,
				price: 35,
			},
			{
				id: 84,
				name: 'Cooking Gas',
				imageUrl: conoil,
				price: 25,
			},
			{
				id: 85,
				name: 'Kerosene',
				imageUrl: conoil,
				price: 18,
			},
			{
				id: 86,
				name: 'Jet Fuel',
				imageUrl: conoil,
				price: 14,
			},
			{
				id: 87,
				name: 'Gasoline',
				imageUrl: conoil,
				price: 18,
			},
			{
				id: 88,
				name: 'Engine Oil',
				imageUrl: conoil,
				price: 14,
			},
			{
				id: 89,
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
				id: 11,
				name: 'Kerosene',
				imageUrl: total,
				price: 220,
			},
			{
				id: 12,
				name: 'Gasoline',
				imageUrl: total,
				price: 280,
			},
			{
				id: 13,
				name: 'Cooking Gas',
				imageUrl: total,
				price: 110,
			},
			{
				id: 14,
				name: 'Engine Oil',
				imageUrl: total,
				price: 160,
			},
			{
				id: 15,
				name: 'Methane',
				imageUrl: total,
				price: 160,
			},
			{
				id: 16,
				name: 'Diesel',
				imageUrl: total,
				price: 160,
			},
			{
				id: 17,
				name: 'Petrol',
				imageUrl: total,
				price: 190,
			},
			{
				id: 18,
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
				id: 21,
				name: 'Gasoline',
				imageUrl: shell,
				price: 125,
			},
			{
				id: 22,
				name: 'Cooking Gas',
				imageUrl: shell,
				price: 90,
			},
			{
				id: 23,
				name: 'Diesel',
				imageUrl: shell,
				price: 90,
			},
			{
				id: 24,
				name: 'Jet Fuel',
				imageUrl: shell,
				price: 165,
			},
			{
				id: 25,
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
				id: 31,
				name: 'Diesel',
				imageUrl: nnpc,
				price: 25,
			},
			{
				id: 32,
				name: 'Gasoline',
				imageUrl: nnpc,
				price: 20,
			},
			{
				id: 33,
				name: 'Kerosene',
				imageUrl: nnpc,
				price: 80,
			},
			{
				id: 44,
				name: 'Jet Fuel',
				imageUrl: nnpc,
				price: 80,
			},
			{
				id: 45,
				name: 'Methane',
				imageUrl: nnpc,
				price: 45,
			},
			{
				id: 46,
				name: 'Cooking Gas',
				imageUrl: nnpc,
				price: 135,
			},
			{
				id: 47,
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
				id: 51,
				name: 'Cooking Gas',
				imageUrl: caltex,
				price: 325,
			},
			{
				id: 52,
				name: 'Kerosene',
				imageUrl: caltex,
				price: 20,
			},
			{
				id: 53,
				name: 'Gasoline',
				imageUrl: caltex,
				price: 25,
			},
			{
				id: 54,
				name: 'Diesel',
				imageUrl: caltex,
				price: 25,
			},
			{
				id: 65,
				name: 'Jet Fuel',
				imageUrl: caltex,
				price: 40,
			},
			{
				id: 56,
				name: 'Petrol',
				imageUrl: caltex,
				price: 25,
			},
		],
	},
];
export default FUEL_STATION_DATA;
