import React, {Component} from 'react';
import ShotChart from "./ShotChart";
import CountSlider from "./CountSlider";

class DataViewContainer extends Component {
    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}/>
                <div className="filters">
                    <CountSlider />
                </div>
            </div>
        );
    }
}

export default DataViewContainer;