import React from 'react';
import {Route, Switch } from 'react-router-dom';
import HomePage from '../../../pages/HomePage/HomePage';
import CharactersPage from '../../../pages/CharactersPage/CharactersPage';
import HousesPage from '../../../pages/HousesPage/HousesPage';
import ChronologyPage from '../../../pages/ChronologyPage/ChronologyPage';
import CharacterDetail from "../../../pages/CharactersPage/pages/CharacterDetail/CharacterDetail";
import {Menu} from "../../../shareds/components/Menu/Menu";

export default function Routes() {
    return (
        <Switch>
            <Route path="/characters/detail/:name">
                <CharacterDetail/>
            </Route>
            <Route path="/characters">
                <CharactersPage/>
                <Menu/>
            </Route>
            <Route path="/houses">
                <HousesPage/>
                <Menu/>
            </Route>
            <Route path="/chronology">
                <ChronologyPage/>
                <Menu/>
            </Route>
            <Route path="/">
                <HomePage/>
                <Menu/>
            </Route>
        </Switch>
    )
}
