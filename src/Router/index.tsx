import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from '../containers/Home';

export function Router() {
    return (
        <BrowserRouter>
            <Route path="*"><Redirect to='/home' /></Route>
            <Route path="/home" component={Home}></Route>
        </BrowserRouter>
    );
}