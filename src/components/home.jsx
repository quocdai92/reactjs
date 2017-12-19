import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel'

class Home extends Component {
    render() {
        return (
            <div className="container-home mt-5x">
                <OwlCarousel items={1} nav navText={["<", ">"]}
                    className="owl-theme banner" autoplay dots={false} loop>
                    <img src="http://inventsoftlabs.com/img/Sharepoint-2013-Editions.png" alt="mvc" className="responsive" />
                    <img src="http://www.samarpaninfotech.com/wp-content/uploads/2017/01/asp-dotnet-development.jpg" alt="mvc" className="responsive" />
                    {/* <img className="responsive" src="https://cdn-images-1.medium.com/max/2000/1*QbwV0zFemiRih1u1T_fMVw.jpeg" alt="" />
                    <img className="responsive" src="https://www.developersq.com/wp-content/uploads/2015/12/learn-react-banner.jpg" alt="" />
                    <img className="responsive" src="https://www.pubnub.com/wp-content/uploads/2016/06/ReactJS-Infinite-Scroll.jpg" alt="" /> */}
                </OwlCarousel>
                <div className="container container-body bg-white mt-0 p-2x">
                    <section className="row intro mt-1x">
                        <div className="col-xs-4">
                            <h3 className="intro-title">
                                Declarative
                            </h3>
                            <div className="intro-detail">
                                <p>
                                    React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                            </p>
                                <p>
                                    Declarative views make your code more predictable and easier to debug.
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <h3 className="intro-title">
                                Component-Based
                            </h3>
                            <div className="intro-detail">
                                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                                <p>
                                    Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <h3 className="intro-title">
                                Learn Once, Write Anywhere
                            </h3>
                            <div className="intro-detail">
                                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                                <p>React can also render on the server using Node and power mobile apps using <a href="https://facebook.github.io/react-native/">React Native</a>.</p>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="row getting-start">
                        <h1 className="getting-start-title">
                            Getting start
                        </h1>
                        <div className="col-xs-12">
                        <p>
                            Get my source code in <a href=""></a>
                        </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;