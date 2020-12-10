import React from 'react';
import './HouseItem.scss';
import { NavLink } from 'react-router-dom';

export default function HouseItem(props) {

    return (
        <NavLink to={'/houses/detail/' + props.house.name}>
            <div className="c-house">
                {props.house.logoURL &&<img className="c-house__img" src={props.house.logoURL} alt={props.house.name}/> }
                {!props.house.logoURL && <img className="c-house__img" src="/assets/images/no-image.png" alt={props.house.name}/> }
                <div className="c-house__hover">
                    <figcaption className="c-house__text u-font-color-white">{props.house.name}</figcaption>
                </div>
            </div>
        </NavLink>

    )
}
