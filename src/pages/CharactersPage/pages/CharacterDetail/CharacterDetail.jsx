import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import './CharacterDetail.scss';
import {Header} from "../../../../core/components/Header/Header";
import LoadingContext from "../../../../shareds/contexts/LoadingContext";

export default function CharacterDetail() {
    const [character, setCharacter] = useState({});
    const [houseImg, setHouseImg] = useState('');
    const {setIsLoading} = useContext(LoadingContext);

    const name = useParams().name;

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/characters/' + name).then(res => {
            setCharacter(res.data);
            axios.get('https://api.got.show/api/show/houses/' + res.data.house).then(dat => {
                setHouseImg(dat.data[0].logoURL);
                setIsLoading(false);
            });
        });

    }, [houseImg, name, setIsLoading]);


    return (
        <div className="b-container">
            <Header showBack="characters"></Header>
            <div className="c-main-charDetail">
                <div className="detail">
                    <div className="c-main-top">
                        <img className="c-main-top__image" src={character.image} alt=""/>
                    </div>
                    <div className="c-main-middle">
                        <span className="c-main-middle__text">
                            {character.name}
                        </span>
                    </div>
                    <div className="c-main-bottom">
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>CASA</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <img className="c-main-bottom__img" src={houseImg} alt=""/>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>ALIANZAS</span>
                            </div>

                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {character.allegiances && character.allegiances.map((allegiance, index) =>
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
                                <span>APARICIONES</span>
                            </div>

                            <div className="c-main-bottom__content">

                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {character.appearances && character.appearances.map((appearance, index) =>
                                            <div className="c-main-bottom__list--margin" key={index}>
                                                <span className="c-main-bottom__text">{appearance}</span>
                                            </div>
                                        )}
                                    </SimpleBar>
                                </div>

                            </div>

                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>PADRE</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <div className="c-main-bottom__list--margin">
                                        <span
                                            className="c-main-bottom__text">{character.father && character.father}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>HERMANOS</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                        {character.siblings && character.siblings.map((sibling, index) =>
                                            <div className="c-main-bottom__list--margin" key={index}>
                                                <span className="c-main-bottom__text">{sibling}</span>
                                            </div>
                                        )}
                                    </SimpleBar>
                                </div>
                            </div>
                        </div>
                        <div className="c-main-bottom__box">
                            <div className="c-main-bottom__title">
                                <span>TITULOS</span>
                            </div>
                            <div className="c-main-bottom__content">
                                <div className="c-main-bottom__list">
                                    <SimpleBar style={{height: "100%"}}>
                                    {character.titles && character.titles.map((title, index) =>
                                        <div className="c-main-bottom__list--margin" key={index}>
                                            <span className="c-main-bottom__text">{title}</span>
                                        </div>
                                    )}
                                    </SimpleBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
