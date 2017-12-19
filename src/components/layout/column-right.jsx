import React, { Component } from 'react';

class ColumnRight extends Component {
    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

export default ColumnRight;