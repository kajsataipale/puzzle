import React, { Component } from 'react';
import './tile.scss';

class Tile extends Component {
    render() {
        const { goal, clickHandler } = this.props;
        const { goal_id } = goal ? goal : {};

        return (
            <div className="tile" onClick={(e) => clickHandler(e, goal_id)}>
                <span className="tile__number">{this.props.number}</span>
            </div>
        )
    }
}

export default Tile;