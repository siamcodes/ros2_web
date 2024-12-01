import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default class Body extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact Component={Home} />
                    <Route path='/about' element={<About/>} />
                </Switch>
            </Router>
        )
    }
}
