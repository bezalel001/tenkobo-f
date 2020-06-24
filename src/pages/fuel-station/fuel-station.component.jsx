import React from 'react';

import FUEL_STATION_DATA from './fuel-station.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class FuelStationPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: FUEL_STATION_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='fuel-station-page'>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default FuelStationPage;
