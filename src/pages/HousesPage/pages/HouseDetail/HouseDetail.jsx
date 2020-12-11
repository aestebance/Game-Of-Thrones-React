import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import './HouseDetail.scss';
import {Header} from "../../../../core/components/Header/Header";
import LoadingContext from "../../../../shareds/contexts/LoadingContext";
import {useTranslation} from "react-i18next";

let date = null;

export default function HouseDetail() {

    const [house, setHouse] = useState({});
    const { setIsLoading } = useContext(LoadingContext);
    const { t } = useTranslation();

    const name = useParams().name;

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/houses/' + name).then(res => {
            date = new Date(res.data[0].createdAt);
            setHouse(res.data[0]);
            setIsLoading(false);
        });

    }, [name, setIsLoading]);

    return (
        <div className="b-container">
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
                                <span>{t("Lema")}</span>
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
                                <span>{t("Sede")}</span>
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
                                <span>{t("Region")}</span>
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
                                <span>{t("Alianzas")}</span>
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
                                <span>{t("Religiones")}</span>
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
                                <span>{t("Fundacion")}</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list--margin">
                                    <span
                                        className="c-main-bottom__text">{date && date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
