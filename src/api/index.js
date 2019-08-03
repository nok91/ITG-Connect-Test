/* eslint-disable no-unused-vars */
/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/
import axios from 'axios';
const API_URL = 'http://localhost:9988';

export const getDataOld = (cb) => {
    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
			if(vehicles.status === 200) {
				cb(vehicles.responseText);
			}
		}
	};

	vehicles.send();
};

export const getData = (cb) => {
	axios
	.get(`${API_URL}/api/vehicle`)
	.then(vehicles => cb({ data: vehicles.data.vehicles, isLoading: false, error: false }))
	.catch(error => cb({ data:[], isLoading: false, error }));
}

export const getVehicle = (url, cb) => {
	axios
	.get(`${API_URL + url}`)
	.then(vehicle => cb({ data: vehicle.data, isLoading: false, error: false }))
	.catch(error => cb({ data:[], isLoading: false, error }));
}
