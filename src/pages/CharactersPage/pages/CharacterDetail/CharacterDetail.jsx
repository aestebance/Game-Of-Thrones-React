import React from 'react';
import { useParams } from 'react-router-dom'
import './CharacterDetail.scss';
import {Header} from "../../../../core/components/Header/Header";

export default function CharacterDetail() {
    const name = useParams().name;
    return (
        <div className="b-container">
            <Header showBack="characters"></Header>
            <div className="c-main-charDetail">
                <div className="detail"></div>
            </div>
        </div>
    )
}
