import React, { Component } from 'react';

class ColumnLeft extends Component {
    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

export default ColumnLeft;