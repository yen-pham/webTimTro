import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from '../components/dashboard/dashboard';
import MotelDetail from '../components/motelDetail';
import Profile from '../components/profile'
import Admin from '../components/admin/index'

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/detail/:id" component={MotelDetail}/>
                    {/* <MotelDetail/>
                    </Route> */}
                    <Route path="/profile">
                    <Profile/>
                    </Route>
                    <Route path="/admin">
                    <Admin/>
                    </Route>
                </Switch>

            </Router>
        );
    }
}

export default AppRouter;