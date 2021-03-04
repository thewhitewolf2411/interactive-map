import React, { PropTypes } from 'react';
import { popup } from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            filter:null,
        };
    }


    render(){
        return(
            <div>
                <MapContainer center={[43.8519774,18.3866868]} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                </MapContainer>
            </div>
        )
    }

}

export default Map;