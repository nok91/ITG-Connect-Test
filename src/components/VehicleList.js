import React, { Component } from 'react';
import { getVehicles } from '../api';
import VehicleItem from './VehicleItem';

export default
class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
			errors: null
		}
	}

	componentDidMount() {
		getVehicles(({data, isLoading, error}) => {
			this.setState({ data, isLoading, error});
		}); 
	} 

	render() {
		const { data, isLoading } = this.state;
		if(!isLoading) {
			return (
				<div className="vehicles-wrapper">
					{
						data.map((vehicle, index) => {
							return (
								<VehicleItem key={index} vehicle={vehicle} />
							);
						})
					}	
				</div>
			)
		}
 
		return (<h1>Loading...</h1>);
	}
}

