import React from 'react';
import {Route, Switch } from 'react-router-dom';
import HomePage from '../../../pages/HomePage/HomePage';
import CharactersPage from '../../../pages/CharactersPage/CharactersPage';
import HousesPage from '../../../pages/HousesPage/HousesPage';
import ChronologyPage from '../../../pages/ChronologyPage/ChronologyPage';
import {Menu} from "../../../shareds/components/Menu/Menu";

export default function Routes() {
    return (
        <Switch>
            <Route path="/characters">
                <CharactersPage></CharactersPage>
                <Menu></Menu>
            </Route>
            <Route path="/houses">
                <HousesPage></HousesPage>
                <Menu></Menu>
            </Route>
            <Route path="/chronology">
                <ChronologyPage></ChronologyPage>
                <Menu></Menu>
            </Route>
            <Route path="/">
                <HomePage></HomePage>
                <Menu></Menu>
            </Route>
        </Switch>
    )
}
