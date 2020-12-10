import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import {SearchBar} from "../../../shareds/components/SearchBar/SearchBar";

export function Header(props) {

    const filterCharacters = (filterData) => {
        props.fnSearch(filterData);
    }

    return (
        <div className="c-header">
            <div className="c-left-bar">
                {props.showBack && <NavLink to={'/' + props.showBack}>
                    <div className="c-left-bar__nav">
                        <img className="c-left-bar__vector" src="/assets/images/vector.svg" alt=""/>
                        <span className="c-left-bar__text">Volver</span>
                    </div>
                </NavLink>}
                {props.showSearch && <SearchBar fnChange={filterCharacters}></SearchBar>}
            </div>
            <div className="c-top-links">
                {!props.hideHome && <NavLink to="/"><img className="c-top-links__flag--group" src="/assets/images/group.png"
                                     alt=""/></NavLink>}
                <img className="c-top-links__flag" src="/assets/images/spain.png" alt=""/>
                <img className="c-top-links__flag" src="/assets/images/uk.png" alt=""/>
            </div>

        </div>
    )
}
