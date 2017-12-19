import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <footer className="bd-footer text-muted">
                <div className="container" id="footer-content">
                    <div id="copyright">
                        Copyright © 2017, Designed and built with all the love in the world by&nbsp;
                        <NavLink to="/about" rel="noopener">DaiNQ</NavLink>
                    </div>
                    <div id="related-link">
                        <p>
                            <NavLink to={"/about"} className={"mr-1x"}>Contact us</NavLink> |
                            <NavLink to={"/term-conditions"} className={"ml-1x mr-1x"}>Terms and Conditions</NavLink> |
                            <NavLink to={"/suport-policy"} className={"ml-1x mr-1x"}>Support Policy</NavLink> |
                            <NavLink to={"/privacy-policy"} className={"ml-1x mr-1x"}>Privacy Policy</NavLink>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;