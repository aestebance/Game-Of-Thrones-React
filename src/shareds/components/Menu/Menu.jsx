import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
    return(
        <div className="c-menu">
            <nav className="c-menu__nav">
                <NavLink className="c-menu__link u-font-color-white" activeClassName="c-menu__link--active" to="/characters">PERSONAJES</NavLink>
                <NavLink className="c-menu__link u-font-color-white" activeClassName="c-menu__link--active" to="/houses">CASAS</NavLink>
                <NavLink className="c-menu__link u-font-color-white" activeClassName="c-menu__link--active" to="/chronology">CRONOLOGIA</NavLink>
            </nav>
        </div>
    );
}

