import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from '../components/dashboard/dashboard';
import MotelDetail from '../components/motelDetail';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/detail">
                    <MotelDetail/>
                    </Route>
                </Switch>

            </Router>
        );
    }
}

export default AppRouter;