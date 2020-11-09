import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';

export function Router() {
    return (
        <BrowserRouter>
            <Route path="" exact component={Home}></Route>
        </BrowserRouter>
    );
}