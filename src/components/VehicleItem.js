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
            console.log("Vehicle Item ", data)
        });
        
	} 

    render() {
        const { data } = this.state;
        const { vehicle } = this.props;
        const { description, meta, price } = data;
        const { id, modelYear, url, media } = vehicle;

        return (
            <div className="vehicle-wrapper">
                <div className="vehicle-wrapper-img" style={{backgroundImage : `url(${media[0].url})`}} />
                <div className="vehicle-description-block">
                    <div className="vehicle-description-title">
                        <h3><b>Vehicle Name {modelYear}</b></h3>
                    </div>
                    <div className="vehicle-description-details">
                        <div className="price">From {price}</div>
                        <div className="description">{description}</div>
                    </div>
                    {/* {id} - {modelYear} - {url} - {media[0].url} - {description} - {price} */}
                </div>
                
            </div>
        );
    }
}

export default VehicleItem;