import React, { Component } from 'react';

class ReplayInterface extends Component {
    render() {
        return (
            <div className="replay-interface">
                <button className=" button-replay " onClick={this.props.replay}>Retry</button>
            </div>
        );
    }
}

export default ReplayInterface;