import {
	conoil,
	total,
	caltex,
	shell,
	nnpc,
} from '../../assets/images/filling-stations/fuel-station.images.js';

const INITIAL_STATE = {
	sections: [
		{
			title: 'Conoil',
			imageUrl: conoil,
			id: 1,
			linkUrl: 'shop/conoil',
		},
		{
			title: 'NNPC',
			imageUrl: nnpc,
			id: 2,
			linkUrl: 'shop/nnpc',
		},
		{
			title: 'Total',
			imageUrl: total,
			id: 3,
			linkUrl: 'shop/total',
		},
		{
			title: 'Shell',
			imageUrl: shell,
			size: 'large',
			id: 4,
			linkUrl: 'shop/shell',
		},
		{
			title: 'Caltex',
			imageUrl: caltex,
			size: 'large',
			id: 5,
			linkUrl: 'shop/caltex',
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
