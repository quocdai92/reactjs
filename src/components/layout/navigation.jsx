import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import img from '../../images/logo-reactjs-48.png'
class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
    }

    render() {
        return (
            <div className="">
                <Navbar inverse fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink exact className="navbar-brand" to={"/"}>
                                <img src={img} height="20" alt="logo"/>&nbsp;
                                ReactApp
                            </NavLink >
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={"/about"}>
                                <NavItem>About</NavItem>
                            </LinkContainer>
                            <LinkContainer to={"/posts"}>
                                <NavItem>Blogs</NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={3} title="Topics" id="basic-nav-dropdown">
                                <LinkContainer to={"/topics/mvc-5"}>
                                    <MenuItem eventKey={3.1}>
                                        ASP.Net MVC 5
                                </MenuItem>
                                </LinkContainer>
                                <LinkContainer to={"/topics/reactjs"}>
                                    <MenuItem eventKey={3.2}>
                                        Reactjs
                                </MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            {/* <Button type="submit">Submit</Button> */}
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;