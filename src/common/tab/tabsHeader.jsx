import React, { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <ul className='nav nav-tabs'>
                {this.props.children}
            </ul>
        )
    }

}

export default TabHeader