import React, { Component } from 'react';
import Nav from './navigation.jsx'

class Header extends Component {
    render() {
        return (
            <header {...this.props}>
                <Nav />
            </header>

        );
    }
}

export default Header;