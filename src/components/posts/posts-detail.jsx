import React, { Component } from 'react';
import axios from 'axios'

class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: {}
        }

    }

    getIdFromUrl(linkSeo) {
        var x = linkSeo.match(/-c\d+/);
        return x[0].replace('-c', '')
    }

    componentWillMount(props) {
        let _this = this;
        var linkSeo = _this.props.match.params.postsId
        var id = _this.getIdFromUrl(linkSeo)
        console.log(id)
        axios.get('http://125.212.235.102:4244/api/news/get-newsfe-by-category/vi-VN/' + id)
            .then(function (response) {
                console.log(response)
                _this.setState({
                    Data: response.data.Data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillReceiveProps(nextProps) {
        let _this = this;
        var linkSeo = nextProps.match.params.postsId
        var id = _this.getIdFromUrl(linkSeo)
        console.log(id)
        axios.get('http://125.212.235.102:4244/api/news/get-newsfe-by-category/vi-VN/' + id)
            .then(function (response) {
                console.log(response)
                _this.setState({
                    Data: response.data.Data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        if (this.state.Data === null) {
            return <div>Data null</div>
        }
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.Data.Contents }} />
        )
    }
}

export default PostDetail;