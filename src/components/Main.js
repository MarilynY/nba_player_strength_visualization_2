import React, {Component} from 'react';
import Profile from './Profile';
import ShotChart from "./ShotChart";

class Main extends Component {
    render() {
        return (
            <div>
                <Profile />
                <ShotChart />
            </div>
        );
    }
}

export default Main;