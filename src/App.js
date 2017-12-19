import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './base.css';

import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Topic from './components/topic.jsx'
import Posts from './components/posts/posts.jsx'
import NotFound from './components/notfound.jsx'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    axios.get('http://125.212.235.102:4244/api/category/get-cats-in-type/vi-VN/6')
      .then(function (response) {
        console.log(response)
        localStorage.setItem('list-cat', JSON.stringify(response.data.Data))
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header className="to-header"/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/posts" component={Posts} />
              <Route path={'/topics/:topicId'} component={Topic} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
