import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
    return(
        <div className="c-menu">
            <nav className="c-menu__nav">
                <NavLink className="c-menu__link" to="/characters"><div className="u-font-color-white">PERSONAJES</div></NavLink>
                <NavLink className="c-menu__link" to="/houses"><div className="u-font-color-white">CASAS</div></NavLink>
                <NavLink className="c-menu__link" to="/chronology"><div className="u-font-color-white">CRONOLOGIA</div></NavLink>
            </nav>
        </div>
    );
}

