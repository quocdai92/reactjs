import React, { Component } from 'react';
import img from '../images/react.png'
// import { Route, Switch, Link } from 'react-router-dom'
import ColumnLeft from './layout/column-left.jsx'
import ColumnRight from './layout/column-right.jsx'

class About extends Component {
    render() {
        return (
            <div className="container container-body">
                <div className="row mt-1x" id="about">
                    <ColumnLeft className="col-md-3 col-sm-3 column-left pl-1x pr-1x">
                        <div className="sidebar">
                            <img className="img-circle img-responsive img-avatar" src={img} alt="avatar" />
                            <h1 className="text-center">Nguyen Quoc Dai</h1>
                            <h2 className="text-center">.Net Developer</h2>
                            <hr className="mt-1x mb-1x" />
                            <ul className="list-unstyled contact-links pl-1x">
                                <li className="mb-1x-half">
                                    <i className="fa fa-lg fa-location-arrow"></i>&nbsp;
                                47/268 Le Trong Tan street, Khuong Mai ward, Thanh Xuan district, Hanoi, Vietnam
                            </li>
                                <li className="mb-1x-half">
                                    <i className="fa fa-lg fa-mobile"></i>&nbsp;
                                01698922992
                            </li>
                                <li className="mb-1x-half">
                                    <i className="fa fa-lg fa-envelope"></i>&nbsp;
                                <a href="mailto:{quocdai92@gmail.com}">quocdai92@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-lg fa-skype"></i>&nbsp;
                                <a href="skype:quocdai92">quocdai92</a>
                                </li>
                            </ul>
                            <hr className="mt-1x mb-1x" />
                            <div className="social-network pl-1x">
                                <a href="https://facebook.com/huntergirl92" className="mr-1x" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fa fa-lg fa-facebook-square"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/nguyen-dai-3ab88667/" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fa fa-lg fa-linkedin"></i>
                                </a>
                            </div>
                            <hr className="mt-1x mb-1x" />
                        </div>

                    </ColumnLeft>
                    <ColumnRight className="col-md-9 col-sm-9 column-right pl-1x pr-1x">
                        <div className="content p-1x">
                            <section className="about">
                                <h2 className="text-uppercase">
                                    <i className="fa fa-lg fa-user"></i>&nbsp;About
                                </h2>
                                <div>Over the past 16 years I have continuously challenged myself with new languages,
                                    frameworks and methodologies. My core languages have always been html,
                                    css &amp; javascript but I have also worked as a full stack php developer building
                                    both bespoke CMS solutions and small business applications.
                                    My current role at IAG is Front End Lead for a small React team and have been developing
                                    with React and Redux for the past 2 years.
                                    </div>
                            </section>
                            <section className="experiences">
                                <h2 className="text-uppercase">
                                    <i className="fa fa-lg fa-building"></i>&nbsp;Work experiences
                                </h2>
                                <div>
                                    
                                </div>
                            </section>
                        </div>
                        {/* <Switch>
                        <Route path={'/about/:aboutId'} component={PostDetail} />
                    </Switch> */}
                    </ColumnRight>
                </div>
            </div>

        );
    }
}

export default About;