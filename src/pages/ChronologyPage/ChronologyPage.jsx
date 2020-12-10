import React from 'react';
import './Choronology.scss';
import {Header} from "../../core/components/Header/Header";
import SimpleBar from "simplebar-react";

export default function ChronologyPage() {
    return (

        <div className="b-container">
            <Header showSearch={false}></Header>
            <div className="c-chronology">
                <SimpleBar style={{height: "100%"}}>
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
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <div className="prueba"></div>)}
                            </div>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}
