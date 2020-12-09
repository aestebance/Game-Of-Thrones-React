import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import {SearchBar} from "../../../shareds/components/SearchBar/SearchBar";

export function Header (props) {

    const filterCharacters = (filterData) => {
        props.fnSearch(filterData);
    }

    return (
        <div className="c-header">
            <div className="c-left-bar">
                {props.showSearch && <SearchBar fnChange={filterCharacters}></SearchBar> }
            </div>
            <div className="c-top-links">
                <NavLink to="/"><img className="c-top-links__flag--group" src="/assets/images/group.png" alt=""/></NavLink>
                <img className="c-top-links__flag" src="/assets/images/spain.png" alt=""/>
                <img className="c-top-links__flag" src="/assets/images/uk.png" alt=""/>
            </div>

        </div>
    )
}
