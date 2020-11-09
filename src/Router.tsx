import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Theory } from './pages/theory/Theory';

export function Router() {
    return (
        <BrowserRouter>
            <Route path="*"><Redirect to='/theory' /></Route>
            <Route path="/theory" component={Theory}></Route>
        </BrowserRouter>
    );
}