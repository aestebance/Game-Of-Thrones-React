import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import {SearchBar} from "../../../shareds/components/SearchBar/SearchBar";
import { useTranslation } from 'react-i18next';

export function Header(props) {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('es');

    const onChangeLanguageEs = () =>{
        i18n.changeLanguage('es');
        setLanguage('es');
    };
    const onChangeLanguageEn = () =>{
            i18n.changeLanguage('en');
            setLanguage('en');
    };

    const onChangeLanguageRo = () =>{
            i18n.changeLanguage('ro');
            setLanguage('ro');
    };


    return (
        <div className="c-header">
            <div className="c-left-bar">
                {props.showBack && <NavLink to={'/' + props.showBack}>
                    <div className="c-left-bar__nav">
                        <img className="c-left-bar__vector" src="/assets/images/vector.svg" alt=""/>
                        <span className="c-left-bar__text">{t("Volver")}</span>
                    </div>
                </NavLink>}
                {props.showSearch && <SearchBar/>}
            </div>
            <div className="c-top-links">
                {!props.hideHome && <NavLink to="/"><img className="c-top-links__flag--group" src="/assets/images/group.png"
                                     alt=""/></NavLink>}
                <img onClick={onChangeLanguageEs} className="c-top-links__flag" src="/assets/images/spain.png" alt=""/>
                <img onClick={onChangeLanguageRo} className="c-top-links__flag" src="/assets/images/romania.png" alt=""/>
                <img onClick={onChangeLanguageEn} className="c-top-links__flag" src="/assets/images/uk.png" alt=""/>
            </div>

        </div>
    )
}
