import React from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import {Nav} from 'react-bootstrap';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {locationData} from '../../src/data/locations';
import $ from 'jquery';

/*
Ikone
*/
//hrana
import hranaMain from '../images/icons/hrana.svg';
import hranaMainIcon from '../images/pins/Hrana_2.svg'

import restoranIcon from '../images/pins/Restoran_2.svg';
import nkpIcon from '../images/pins/Restoran_2.svg';

import restoranMainIcon from '../images/icons/restoran.svg';
import nkpMainIcon from '../images/icons/hrana na kucnom.svg';

//vino i rakija
import vinoirakijaMain from '../images/icons/vino.svg';
import vinoirakijaMainIcon from '../images/pins/Vino_2.svg';

import vinoIcon from '../images/pins/Vino_2.svg';
import rakijaIcon from '../images/pins/rakija_pin.svg';
import pivoIcon from '../images/pins/Piva_pin.svg';

import vinoMainIcon from '../images/icons/vino.svg';
import rakijaMainIcon from '../images/icons/rakija.svg';
import pivoMainIcon from '../images/icons/Pivo.svg';

//naslijedje
import naslijedjeMain from '../images/icons/naslijedje.svg';
import naslijedjeMainIcon from '../images/pins/Naslijedje_2.svg';

import tvrdjavaIcon from '../images/pins/Tvrdjave_2.svg';
import muzejIcon from '../images/pins/Muzeji_2.svg';
import arheologijaIcon from '../images/pins/Arheoloska_nalazista_2.svg';
import nekropolaIcon from '../images/pins/Nekropole_stecaka_2.svg';

import tvrdjavaMainIcon from '../images/icons/tvrdjave.svg';
import muzejMainIcon from '../images/icons/muzeji.svg';
import arheologijaMainIcon from '../images/icons/arheoloska na.svg';
import nekropolaMainIcon from '../images/icons/nekropole stecaka.svg';

//aktivan odmor
import aktivanodmorMain from '../images/icons/aktivan odmor.svg';
import aktivanodmorMainIcon from '../images/pins/Aktivan_odmor_2.svg';

import streljastvoIcon from '../images/pins/Streljastvo.svg';
import jahanjeIcon from '../images/pins/Jahanje.svg';
import biciklizamIcon from '../images/pins/Bike_2.svg'; 
import paraglajdingIcon from '../images/pins/Paraglajding_2.svg';
import planinarenjeIcon from '../images/pins/Planinarenje_2.svg';
import penjanjeIcon from '../images/pins/Penjanje_2.svg';
import kanuIcon from '../images/pins/Kanu_2.svg';
import raftingIcon from '../images/pins/Rafting_2.svg';
import skijanjeIcon from '../images/pins/Skijanje_2.svg';

import streljastvoMainIcon from '../images/icons/Streljastvo_1.svg';
import jahanjeMainIcon from '../images/icons/jahanje.svg';
import biciklizamMainIcon from '../images/icons/bike.svg';
import paraglajdingMainIcon from '../images/icons/paraglajding.svg';
import planinarenjeMainIcon from '../images/icons/planinarenje.svg';
import penjanjeMainIcon from '../images/icons/penjanje.svg';
import kanuMainIcon from '../images/icons/kanu.svg';
import raftingMainIcon from '../images/icons/rafting.svg';
import skijanjeMainIcon from '../images/icons/skijanje.svg';

//u prirodi
import uprirodiMain from '../images/icons/priroda.svg';
import uprirodiMainIcon from '../images/pins/Priroda_2.svg';

import pecinaIcon from '../images/pins/Pecine_2.svg';
import rijekaIcon from '../images/pins/Rijeke_2.svg';
import jezeraIcon from '../images/pins/Jezera_2.svg';
import sumaIcon from '../images/pins/Sume_2.svg';
import planinaIcon from '../images/pins/Planine_2.svg';

import pecinaMainIcon from '../images/icons/pecine.svg';
import rijekaMainIcon from '../images/icons/rijeke.svg';
import jezeraMainIcon from '../images/icons/jezera.svg';
import sumaMainIcon from '../images/icons/sume.svg';
import planinaMainIcon from '../images/icons/planine.svg';


class MapNavbar extends React.Component{

    constructor(props){
        super(props);

        this.toggleFood = this.toggleFood.bind(this);
        this.toggleVine = this.toggleVine.bind(this);
        this.toggleInheritance = this.toggleInheritance.bind(this);
        this.toggleActivevacation = this.toggleActivevacation.bind(this);
        this.toggleInnature = this.toggleInnature.bind(this);

        this.state = {
            food: true,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: true,
            filter:false,
        };

    }

    componentDidUpdate(){

        $('#defaultrow').removeClass('defaultshow');

        setTimeout(() => {
            switch(this.state.filter){
                case 'restoran':
                    $('.leaflet-marker-icon').prop('src', restoranIcon);
                    break;
                case 'nkp':
                    $('.leaflet-marker-icon').prop('src', nkpIcon);
                    break;
                case 'vino':
                    $('.leaflet-marker-icon').prop('src', vinoIcon);
                    break;
                case 'rakija':
                    $('.leaflet-marker-icon').prop('src', rakijaIcon);
                    break;
                case 'pivo':
                    $('.leaflet-marker-icon').prop('src', pivoIcon);
                    break;
                case 'tvrdjava':
                    $('.leaflet-marker-icon').prop('src', tvrdjavaIcon);
                    break;
                case 'muzej':
                    $('.leaflet-marker-icon').prop('src', muzejIcon);
                    break;
                case 'nekropola':
                    $('.leaflet-marker-icon').prop('src', nekropolaIcon);
                    break;
                case 'arheologija':
                    $('.leaflet-marker-icon').prop('src', arheologijaIcon);
                    break;
                case 'streljastvo':
                    $('.leaflet-marker-icon').prop('src', streljastvoIcon);
                    break;
                case 'jahanje':
                    $('.leaflet-marker-icon').prop('src', jahanjeIcon);
                    break;
                case 'biciklizam':
                    $('.leaflet-marker-icon').prop('src', biciklizamIcon);
                    break;
                case 'paraglajding':
                    $('.leaflet-marker-icon').prop('src', paraglajdingIcon);
                    break;
                case 'planinarenje':
                    $('.leaflet-marker-icon').prop('src', planinarenjeIcon);
                    break;
                case 'penjanje':
                    $('.leaflet-marker-icon').prop('src', penjanjeIcon);
                    break;
                case 'kanu':
                    $('.leaflet-marker-icon').prop('src', kanuIcon);
                    break;
                case 'rafting':
                    $('.leaflet-marker-icon').prop('src', raftingIcon);
                    break;
                case 'skijanje':
                    $('.leaflet-marker-icon').prop('src', skijanjeIcon);
                    break;
                case 'pecina':
                    $('.leaflet-marker-icon').prop('src', pecinaIcon);
                    break;
                case 'rijeka':
                    $('.leaflet-marker-icon').prop('src', rijekaIcon);
                    break;
                case 'jezera':
                    $('.leaflet-marker-icon').prop('src', jezeraIcon);
                    break;
                case 'suma':
                    $('.leaflet-marker-icon').prop('src', sumaIcon);
                    break;
                case 'planina':
                    $('.leaflet-marker-icon').prop('src', planinaIcon);
                    break;
                case 'hrana':
                    $('.leaflet-marker-icon').prop('src', hranaMainIcon);
                    break;
                case 'vinoirakija':
                    $('.leaflet-marker-icon').prop('src', vinoirakijaMainIcon);
                    break;
                case 'inheritance':
                    $('.leaflet-marker-icon').prop('src', naslijedjeMainIcon);
                    break;
                case 'activevacation':
                    $('.leaflet-marker-icon').prop('src', aktivanodmorMainIcon);
                    break;
                case 'innature':
                    $('.leaflet-marker-icon').prop('src', uprirodiMainIcon);
                    break;
                default:
                    $('.leaflet-marker-icon').prop('src', null);
                    break;
            }
        }, 1);
    }

    toggleFood(){
        $('.row>.nav-item>.nav-link').removeClass('active');
        this.setState({
            food: false,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: true,
            filter:'hrana'
        });
    }

    toggleVine(){
        $('.row>.nav-item>.nav-link').removeClass('active');
        this.setState({
            food: true,
            vine: false,
            inheritance: true,
            activevacation: true,
            innature: true,
            filter:'vinoirakija'
        });
    }

    toggleInheritance(){
        $('.row>.nav-item>.nav-link').removeClass('active');
        this.setState({
            food: true,
            vine: true,
            inheritance: false,
            activevacation: true,
            innature: true,
            filter:'inheritance'
        });
    }

    toggleActivevacation(){
        $('.row>.nav-item>.nav-link').removeClass('active');
        this.setState({
            food: true,
            vine: true,
            inheritance: true,
            activevacation: false,
            innature: true,
            filter:'activevacation'
        });
    }

    toggleInnature(){
        $('.row>.nav-item>.nav-link').removeClass('active');
        this.setState({
            food: true,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: false,
            filter:'innature'
        });
    }

    setFilter(variable){
        this.setState({filter:variable});

        $('.row>.nav-item>.nav-link').removeClass('active');
        $('#' + variable).addClass('active');
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

                                    if(data.url !== ""){
                                        return(
                                            <Marker key={key} position={[data.lognitute, data.lattitude]}>
                                                <Popup>
                                                    <p><strong>{data.title}</strong></p>
                                                    <a href={data.url} target="_blank" rel="noreferrer">Istraži destinaciju</a>
                                                </Popup>
                                            </Marker>
                                        );
                                    }
                                    else{
                                        return(
                                            <Marker key={key} position={[data.lognitute, data.lattitude]}>
                                                <Popup>
                                                    <p><strong>{data.title}</strong></p>
                                                </Popup>
                                            </Marker>
                                        );
                                    }
                                }
                            }
                        })
                    }

                </MapContainer>
                <Nav fill variant="tabs" >
                    <Nav.Item onClick={this.toggleFood} >
                        <Nav.Link eventKey="link-1" className={`${!this.state.food === true ? 'active':''}`}>
                            <img alt="icon" className="mx-3" src={hranaMain}></img>
                            Hrana
                            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleVine}>
                        <Nav.Link eventKey="link-2" className={`${!this.state.vine === true ? 'active':''}`}>
                            <img alt="icon" className="mx-3" src={vinoirakijaMain}></img>
                            Vino i rakija
                            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleInheritance}>
                        <Nav.Link eventKey="link-3" className={`${!this.state.inheritance === true ? 'active':''}`}>
                            <img alt="icon" className="mx-3" src={naslijedjeMain}></img>
                            Naslijeđe
                            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleActivevacation}>
                        <Nav.Link eventKey="link-4" className={`${!this.state.activevacation === true ? 'active':''}`}>
                            <img alt="icon" className="mx-3" src={aktivanodmorMain}></img>
                            Aktivan odmor
                            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleInnature}>
                        <Nav.Link eventKey="link-5" className={`${!this.state.innature === true ? 'active':''}`}>
                            <img alt="icon" className="mx-3" src={uprirodiMain}></img>
                            U prirodi
                            </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Collapse className="navbar-toggleable-md px-5 defaultshow" id="defaultrow" isOpen>
                    <Nav className="row">

                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.food}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('restoran')} id="restoran">
                                <img alt="icon" className="mx-1" src={restoranMainIcon}></img>
                                <p>Restoran</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('nkp')} id="nkp">
                                <img alt="icon" className="mx-1" src={nkpMainIcon}></img>
                                <p>Na kućnom pragu</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.vine}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('vino')} id="vino">
                                <img alt="icon" className="mx-1" src={vinoMainIcon}></img>
                                <p>Vino</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('rakija')} id="rakija">
                                <img alt="icon" className="mx-1" src={rakijaMainIcon}></img>
                                <p>Rakija</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('pivo')} id="pivo">
                                <img alt="icon" className="mx-1" src={pivoMainIcon}></img>
                                <p>Pivo</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.inheritance}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('tvrdjava')} id="tvrdjava">
                                <img alt="icon" className="mx-1" src={tvrdjavaMainIcon}></img>
                                <p>Tvrđava</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('muzej')} id="muzej">
                                <img alt="icon" className="mx-1" src={muzejMainIcon}></img>
                                <p>Muzej</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('nekropola')} id="nekropola">
                                <img alt="icon" className="mx-1" src={nekropolaMainIcon}></img>
                                <p>Nekropola stećaka</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('arheologija')} id="arheologija">
                                <img alt="icon" className="mx-1" src={arheologijaMainIcon}></img>
                                <p>Arheološka nalazišta</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.activevacation}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('streljastvo')} id="streljastvo">
                                <img alt="icon" className="mx-1" src={streljastvoMainIcon}></img>
                                <p>Streljaštvo</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('jahanje')} id="jahanje">
                                <img alt="icon" className="mx-1" src={jahanjeMainIcon}></img>
                                <p>Jahanje</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('biciklizam')} id="biciklizam">
                                <img alt="icon" className="mx-1" src={biciklizamMainIcon}></img>
                                <p>Biciklizam</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('paraglajding')} id="paraglajding">
                                <img alt="icon" className="mx-1" src={paraglajdingMainIcon}></img>
                                <p>Paraglajding</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('planinarenje')} id="planinarenje">
                                <img alt="icon" className="mx-1" src={planinarenjeMainIcon}></img>
                                <p>Planinarenje</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('penjanje')} id="penjanje">
                                <img alt="icon" className="mx-1" src={penjanjeMainIcon}></img>
                                <p>Penjanje</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('kanu')} id="kanu">
                                <img alt="icon" className="mx-1" src={kanuMainIcon}></img>
                                <p>Kanu</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('rafting')} id="rafting">
                                <img alt="icon" className="mx-1" src={raftingMainIcon}></img>
                                <p>Rafting</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('skijanje')} id="skijanje">
                                <img alt="icon" className="mx-1" src={skijanjeMainIcon}></img>
                                <p>Skijanje</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Collapse className="navbar-toggleable-md px-5" isOpen={!this.state.innature}>
                    <Nav className="row">
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('pecina')} id="pecina">
                                <img alt="icon" className="mx-1" src={pecinaMainIcon}></img>
                                <p>Pećina</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('rijeka')} id="rijeka">
                                <img alt="icon" className="mx-1" src={rijekaMainIcon}></img>
                                <p>Rijeka</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('jezera')} id="jezera">
                                <img alt="icon" className="mx-1" src={jezeraMainIcon}></img>
                                <p>Jezera</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('suma')} id="suma">
                                <img alt="icon" className="mx-1" src={sumaMainIcon}></img>
                                <p>Šuma</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.setFilter('planina')} id="planina">
                                <img alt="icon" className="mx-1" src={planinaMainIcon}></img>
                                <p>Planina</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        )

    }

}

export default MapNavbar;