import React, { Component } from 'react';

class Topic extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div className="container">
                <div className="container-body bg-white" id="topic">
                    <h3>{this.props.match.params.topicId}</h3>
                    nguyen dai
                </div>
            </div>

        );
    }
}

export default Topic;