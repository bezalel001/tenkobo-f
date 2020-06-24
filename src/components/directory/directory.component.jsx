import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import {
	conoil,
	total,
	caltex,
	shell,
	nnpc,
} from '../../assets/images/filling-stations/fuel-station.images.js';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'Conoil',
					imageUrl: conoil,
					id: 1,
					linkUrl: 'conoil',
				},
				{
					title: 'NNPC',
					imageUrl: nnpc,
					id: 2,
					linkUrl: 'nnpc',
				},
				{
					title: 'Total',
					imageUrl: total,
					id: 3,
					linkUrl: 'total',
				},
				{
					title: 'Shell',
					imageUrl: shell,
					size: 'large',
					id: 4,
					linkUrl: 'shell',
				},
				{
					title: 'Caltex',
					imageUrl: caltex,
					size: 'large',
					id: 5,
					linkUrl: 'caltex',
				},
			],
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
