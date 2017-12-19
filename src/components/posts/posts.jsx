import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import ColumnLeft from '../layout/column-left.jsx'
import ColumnRight from '../layout/column-right.jsx'
import PostDetail from './posts-detail.jsx'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCat: []
        }
    }
    componentWillMount() {
        var listCat = []
        if (localStorage.getItem('list-cat') !== "") {
            listCat = JSON.parse(localStorage.getItem('list-cat'))
        }
        this.setState({
            listCat: listCat
        })
    }
    render() {
        var divNoChoose = null;
        if (this.props.match.isExact) {
            divNoChoose = <div>Select a post</div>
        }
        var divCat = null
        if (this.state.listCat.length > 0) {
            divCat = this.state.listCat.map((cat, i) => {
                return <li key={i}>
                    <Link to={"/posts/" + cat.LinkSeo}>{cat.Title}</Link>
                </li>
            })
        }
        return (
            <div className="container">
                <div className="row posts container-body" id="posts">
                    <ColumnLeft className="col-md-9 col-sm-9 column-left mt-8x">
                        {divNoChoose}
                        <Switch>
                            <Route path={'/posts/:postsId'} component={PostDetail} />
                        </Switch>
                    </ColumnLeft>
                    <ColumnRight className="col-md-3 col-sm-3 column-right mt-6x">
                        <ul className="no-padding">
                            {divCat}
                        </ul>
                    </ColumnRight>
                </div>
            </div>

        );
    }
}

export default Posts;