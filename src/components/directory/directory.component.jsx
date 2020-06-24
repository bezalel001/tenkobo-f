import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import conoil from '../../images/filling-stations/conoil/conoil002.jpg';
import nnpc from '../../images/filling-stations/nnpc/nnpc001.jpg';
import total from '../../images/filling-stations/total/total001.jpg';
import shell from '../../images/filling-stations/shell/shell001.jpg';
import caltex from '../../images/filling-stations/caltex/caltex001.jpg';

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
