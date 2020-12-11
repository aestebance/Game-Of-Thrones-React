import React from 'react';
import './CharacterItem.scss';
import { NavLink } from 'react-router-dom';

export default function CharacterItem(props) {

    return (
        <NavLink to={'/characters/detail/' + props.character.name}>
            <div className="c-card">
                {props.character.image && <img className="c-card__img" src={props.character.image} alt={props.character.name}/>}
                {!props.character.image && <img className="c-card__img" src="/assets/images/no-image.png" alt={props.character.name}/>}
                <div className="c-card__hover">
                    <figcaption className="c-card__text u-font-color-white">{props.character.name}</figcaption>
                </div>
            </div>
        </NavLink>

    )
}
