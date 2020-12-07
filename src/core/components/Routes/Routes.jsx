import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Main from '../../../pages/Main/Main';
import Characters from '../../../pages/Characters/Characters';
import Houses from '../../../pages/Houses/Houses';
import Chronology from '../../../pages/Chronology/Chronology';

export default function Routes() {
    return (
        <Switch>
            <Route path="/characters">
                <Characters></Characters>
            </Route>
            <Route path="/houses">
                <Houses></Houses>
            </Route>
            <Route path="/chronology">
                <Chronology></Chronology>
            </Route>
            <Route path="/">
                <Main></Main>
            </Route>
        </Switch>
    )
}
