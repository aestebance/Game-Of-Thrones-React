import React from 'react';
import './HomePage.scss';
import {Header} from "../../core/components/Header/Header";
import {Menu} from "../../shareds/components/Menu/Menu";

export default function HomePage() {
    return (
            <div className="b-container b-container--background">
                <Header hideHome="true"></Header>
                <div className="c-main-home">
                    <p className="c-title">GAME OF THRONES</p>
                </div>
                <Menu></Menu>
            </div>
    )
}
