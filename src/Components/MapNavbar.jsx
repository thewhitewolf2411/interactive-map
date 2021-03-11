import React from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import {Nav} from 'react-bootstrap';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {locationData} from '../../src/data/locations';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

/*
Ikone
*/
import streljastvoIcon from '../images/pins/Streljastvo.svg';
import jahanjeIcon from '../images/pins/Jahanje.svg';

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
            showIcon:icon,
        };

    }



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

        switch(variable){
            case 'streljastvo':
                var strIcon = L.icon({
                    iconUrl: streljastvoIcon,
                    shadowUrl: iconShadow
                });
                L.Marker.prototype.options.icon = strIcon;
                break;
            case 'jahanje':
                var jahIcon = L.icon({
                    iconUrl: jahanjeIcon,
                    shadowUrl: iconShadow
                });
                L.Marker.prototype.options.icon = jahIcon;
                break;
            case '':
                break;
            case '':
                break;
            case '':
                break;

        }
    }

    openUrl(url){
        console.log(url);
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
                                        <Marker key={key} position={[data.lognitute, data.lattitude]}>
                                            <Popup onClick={() => this.openUrl(data.url)}>
                                                <h5>{data.title}</h5>
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
                            <NavLink onClick={() => this.setFilter('restoran')}>Restoran</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('nkp')}>Na kućnom pragu</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.vine}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('vino')}>Vino</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('rakija')}>Rakija</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('pivo')}>Pivo</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.inheritance}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('tvrdjava')}>Tvrđava</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('muzej')}>Muzej</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('nekropola')}>Nekropola stećaka</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('arheologija')}>Arheološka nalazišta</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.activevacation}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('streljastvo')}>Streljaštvo</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('jahanje')}>Jahanje</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('biciklizam')}>Biciklizam</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('paraglajding')}>Paraglajding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('planinarenje')}>Planinarenje</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('penjanje')}>Penjanje</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('kanu')}>Kanu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('rafting')}>Rafting</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('skijanje')}>Skijanje</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.innature}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('pecina')}>Pećina</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('rijeka')}>Rijeka</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('jezera')}>Jezera</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('suma')}>Šuma</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('planina')}>Planina</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        )

    }

}

export default MapNavbar;