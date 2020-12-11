import React from 'react';
import './ChronologyBox.scss'
import {NavLink} from 'react-router-dom';

export default function ChronologyBox(props) {
    return (
        <NavLink to={'/characters/detail/' + props.character.name}>
            <div className={props.leftPosition ? 'c-box c-box--right' : 'c-box'}>
                <p className="c-box__age">{props.character.age.age}</p>
                <p className="c-box__name">{props.character.name}</p>
                {props.character.image && <img className="c-box__img" src={props.character.image} alt=""/>}
                {!props.character.image && <img className="c-box__img" src="/assets/images/no-image.png" alt=""/>}
            </div>
        </NavLink>
    )
}
