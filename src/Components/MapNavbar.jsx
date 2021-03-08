import React from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import {Nav} from 'react-bootstrap';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {locationData} from '../../src/data/locations';

class MapNavbar extends React.Component{

    constructor(props){
        super(props);

        this.toggleFood = this.toggleFood.bind(this);
        this.toggleVine = this.toggleVine.bind(this);
        this.toggleInheritance = this.toggleInheritance.bind(this);
        this.toggleActivevacation = this.toggleActivevacation.bind(this);
        this.toggleInnature = this.toggleInnature.bind(this);

        this.customIcon = this.customIcon;

        this.state = {
            food: true,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: true,
            filter:false,
        };
    }

    customIcon = L.icon({
        iconUrl: '',

        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]

    });

    toggleFood(){
        this.setState({
            food: false,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: true,
            filter:false
        });
    }

    toggleVine(){
        this.setState({
            food: true,
            vine: false,
            inheritance: true,
            activevacation: true,
            innature: true,
            filter:false
        });
    }

    toggleInheritance(){
        this.setState({
            food: true,
            vine: true,
            inheritance: false,
            activevacation: true,
            innature: true,
            filter:false
        });
    }

    toggleActivevacation(){
        this.setState({
            food: true,
            vine: true,
            inheritance: true,
            activevacation: false,
            innature: true,
            filter:false
        });
    }

    toggleInnature(){
        this.setState({
            food: true,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: false,
            filter:false
        });
    }

    setFilter(variable){
        //alert(variable);
        this.setState({filter:variable});

        this.customIcon = L.icon({
            iconUrl: '../../images/pins/LGBT_2.svg',
    
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
    
        });

        L.marker({icon:this.customIcon});
    }
    
    render(){
        return(
            <div>
                <MapContainer center={[43.8519774,18.3866868]} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        locationData.map((data, key)=>{
                            if(this.state.filter === false){
                                return null;
                            }
                            else{
                                if(data.tags.includes(this.state.filter)){
                                    return(
                                        <Marker key={key} position={[data.lognitute, data.lattitude]} icon={this.state.imageUrl}>
                                            <Popup>
                                                {data.title}
                                            </Popup>
                                        </Marker>
                                    );
                                }
                            }
                        })
                    }

                </MapContainer>
                <Nav fill variant="tabs" >
                    <Nav.Item onClick={this.toggleFood} >
                        <Nav.Link eventKey="link-1" className={`${!this.state.food === true ? 'active':''}`}>Hrana</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleVine}>
                        <Nav.Link eventKey="link-2" className={`${!this.state.vine === true ? 'active':''}`}>Vino i rakija</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleInheritance}>
                        <Nav.Link eventKey="link-3" className={`${!this.state.inheritance === true ? 'active':''}`}>Naslijeđe</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleActivevacation}>
                        <Nav.Link eventKey="link-4" className={`${!this.state.activevacation === true ? 'active':''}`}>Aktivan odmor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleInnature}>
                        <Nav.Link eventKey="link-5" className={`${!this.state.innature === true ? 'active':''}`}>U prirodi</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.food}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink>Restoran</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Na kućnom pragu</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.vine}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink>Vino</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Rakija</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Pivo</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.inheritance}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink>Tvrđava</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Muzej</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Nekropola stećaka</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Arheološka nalazišta</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.activevacation}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('streljastvo')}>Streljaštvo</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Jahanje</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Biciklizam</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Paraglajding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Planinarenje</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Penjanje</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Kanu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Rafting</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Skijanje</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.innature}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink>Pećina</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Rijeka</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Jezera</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Šuma</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Planina</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            
                <Collapse className="navbar-toggleable-md px-5" isOpen={this.state.filter}>
                    <Nav className="row">
                    {
                        locationData.map((data, key)=>{
                            if(this.state.filter === false){
                                return null;
                            }
                            else{
                                if(data.tags.includes(this.state.filter)){
                                    return(
                                        <NavItem>
                                            <NavLink>{data.title}</NavLink>
                                        </NavItem>
                                    );
                                }
                            }
                        })
                    }
                    </Nav>
                </Collapse>
            </div>
        )

    }

}

export default MapNavbar;