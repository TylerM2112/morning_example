import React, { Component } from 'react';

class List extends Component {
    render() {
        var list = this.props.list.map((item) => {
            return(
                <li>{item}</li>
            )
        })
        return (
            <div>
            LIST COMPO
            <ul>
                {list}
            </ul>
            </div>
        );
    }
}

export default List;