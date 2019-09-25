import React, { Component } from 'react';
import { getVehicle } from '../api';

class VehicleItem extends Component {
    constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
			errors: null
		}
    }
    
    componentDidMount() {
        const { vehicle } = this.props;
        const { url } = vehicle;

		getVehicle(url, ({data, isLoading, error}) => {
            this.setState({ data, isLoading, error});
        });
	} 

    render() {
        const { data } = this.state;
        const { vehicle } = this.props;
        const { description, meta, price } = data;
        const { id, modelYear, url, media } = vehicle;

        Console.log("test 1");
        Console.log("test 2");

        return (
            <div className="vehicle-wrapper">
                <div className="vehicle-wrapper-img" style={{backgroundImage : `url(${media[0].url})`}} />
                <div className="vehicle-description-block">
                    <div className="vehicle-description-title">
                        <h3><b>{media[0].name} {modelYear}</b></h3>
                    </div>
                    <div className="vehicle-description-details">
                        <div className="price">From {price}</div>
                        <div className="description">{description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VehicleItem;