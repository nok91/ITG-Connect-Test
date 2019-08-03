import React, { Component } from 'react';
import { getData } from '../api';
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
		getData(({data, isLoading, error}) => {
			this.setState({ data, isLoading, error});
		});
	} 

	_renderVehicleHandler() {
		const { data } = this.state;
		return(
			data.map((vehicle, index) => {
				return (
					<VehicleItem key={index} vehicle={vehicle} />
				);
			})
		);
	}

	render() {
		const { data, isLoading } = this.state;
		if(!isLoading) {
			return (
				<div className="vehicles-wrapper">
					{
						this._renderVehicleHandler()
					}	
				</div>
			)
		}
 
		return (<h1>Loading...</h1>);

	}
}

