import React, { PropTypes } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, NavbarText } from 'reactstrap';
import {Nav} from 'react-bootstrap';
import Map from './Map';

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
            innature: true
        };

    }

    toggleFood(){
        this.setState({
            food: !this.state.food,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: true
        });
    }

    toggleVine(){
        this.setState({
            food: true,
            vine: !this.state.vine,
            inheritance: true,
            activevacation: true,
            innature: true
        });
    }

    toggleInheritance(){
        this.setState({
            food: true,
            vine: true,
            inheritance: !this.state.inheritance,
            activevacation: true,
            innature: true
        });
    }

    toggleActivevacation(){
        this.setState({
            food: true,
            vine: true,
            inheritance: true,
            activevacation: !this.state.activevacation,
            innature: true
        });
    }

    toggleInnature(){
        this.setState({
            food: true,
            vine: true,
            inheritance: true,
            activevacation: true,
            innature: !this.state.innature
        });
    }
    
    render(){
        return(
            <div>
                <Map></Map>
                <Nav variant="tabs">
                    <Nav.Item onClick={this.toggleFood}>
                        <Nav.Link eventKey="link-1">Hrana</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleVine}>
                        <Nav.Link eventKey="link-2">Vino i rakija</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleInheritance}>
                        <Nav.Link eventKey="link-3">Naslijeđe</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleActivevacation}>
                        <Nav.Link eventKey="link-4">Aktivan odmor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={this.toggleInnature}>
                        <Nav.Link eventKey="link-5">U prirodi</Nav.Link>
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
                            <NavLink>Streljaštvo</NavLink>
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
            </div>
        )
    }

}

export default MapNavbar;