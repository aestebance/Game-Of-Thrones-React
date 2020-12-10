import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import './HouseDetail.scss';
import {Header} from "../../../../core/components/Header/Header";

export default function HouseDetail() {

    const [house, setHouse] = useState({});
    const [loader, setLoader] = useState(true);

    const name = useParams().name;

    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses/' + name).then(res => {
            setHouse(res.data[0]);
            setLoader(false);
        });

    }, [name]);

    return (
        <div className="b-container">
            {loader && <div className="b-loader">
                <div className="lds-hourglass"></div>
            </div>}
            <Header showBack="houses"></Header>
            <div className="c-main-HouseDetail">
                <div className="detail">
                    <div className="c-main-top">
                        {house.logoURL && <img className="c-main-top__image" src={house.logoURL} alt={house.name}/>}
                        {!house.logoURL && <img className="c-main-top__image" src="/assets/images/no-image.png" alt={house.name}/>}
                    </div>
                    <div className="c-main-middle">
                        <span className="c-main-middle__text">
                            {house.name}
                        </span>
                    </div>
                    <div className="c-main-bottom">
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>LEMA</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list--margin">
                                    <span
                                        className="c-main-bottom__text">{house.words && house.words}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>SEDE</span>
                            </div>

                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {house.seat && house.seat.map((seat, index) =>
                                            <div className="c-main-bottom__list--margin" key={index}>
                                                <span className="c-main-bottom__text">{seat}</span>
                                            </div>
                                        )}
                                    </SimpleBar>
                                </div>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>REGION</span>
                            </div>

                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {house.region && house.region.map((region, index) =>
                                            <div className="c-main-bottom__list--margin" key={index}>
                                                <span className="c-main-bottom__text">{region}</span>
                                            </div>
                                        )}
                                    </SimpleBar>
                                </div>
                            </div>

                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>ALIANZAS</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {house.allegiance && house.allegiance.map((allegiance, index) =>
                                            <div className="c-main-bottom__list--margin" key={index}>
                                                <span className="c-main-bottom__text">{allegiance}</span>
                                            </div>
                                        )}
                                    </SimpleBar>
                                </div>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>RELIGIONES</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {house.religion && house.religion.map((religion, index) =>
                                            <div className="c-main-bottom__list--margin" key={index}>
                                                <span className="c-main-bottom__text">{religion}</span>
                                            </div>
                                        )}
                                    </SimpleBar>
                                </div>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>FUNDACION</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    {/*<SimpleBar style={{height: "100%"}}>*/}
                                    {/*    {character.titles && character.titles.map((char, index) =>*/}
                                    {/*        <div className="c-main-bottom__list--margin" key={index}>*/}
                                    {/*            <span className="c-main-bottom__text">{char}</span>*/}
                                    {/*        </div>*/}
                                    {/*    )}*/}
                                    {/*</SimpleBar>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
