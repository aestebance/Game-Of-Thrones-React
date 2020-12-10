import React from 'react';
import './Choronology.scss';
import {Header} from "../../core/components/Header/Header";

export default function ChronologyPage() {
    return (

        <div className="b-container">
            <Header showSearch={false}></Header>
            <div className="c-chronology">
                <div className="c-simpleBar">
                    <div className="c-chronology__middle">
                        <div className="c-chronology__topTimeLine">
                            <div className="c-circle">
                                <p className="c-circle__text">0</p>
                            </div>
                            <div className="c-arrow">
                                <img src="/assets/images/flecha.svg" alt=""/>
                            </div>
                            <div className="c-arrow__down">

                            </div>
                        </div>
                        <div className="c-chronology__timeLine">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
