import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import { useTranslation } from 'react-i18next';

export function Menu() {
    const { t } = useTranslation();
    return(
        <div className="c-menu">
            <nav className="c-menu__nav">
                <NavLink className="c-menu__link u-font-color-white" activeClassName="c-menu__link--active" to="/characters">{t('Personajes')}</NavLink>
                <NavLink className="c-menu__link u-font-color-white" activeClassName="c-menu__link--active" to="/houses">{t('Casas')}</NavLink>
                <NavLink className="c-menu__link u-font-color-white" activeClassName="c-menu__link--active" to="/chronology">{t('Cronologia')}</NavLink>
            </nav>
        </div>
    );
}

