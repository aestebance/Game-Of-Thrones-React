import React, {useContext, useEffect, useState} from 'react';
import './ChronologyPage.scss';
import {Header} from "../../core/components/Header/Header";
import SimpleBar from "simplebar-react";
import ChronologyBox from "./components/ChronologyBox/ChronologyBox";
import axios from "axios";
import LoadingContext from "../../shareds/contexts/LoadingContext";

export default function ChronologyPage() {
    const [characters, setCharacters] = useState([]);
    const [order, setOrder] = useState(false);
    const {setIsLoading} = useContext(LoadingContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/characters').then(res => {
            setCharacters(res.data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        ordering();
    }, [characters]);

    const ordering = () => {
        if (!order) {
            const ordered = characters.sort(function (a, b) {
                if (a.age && b.age)
                    return parseInt(b.age.age) - parseInt(a.age.age);
            });
            setCharacters(ordered);
            setOrder(true);
        } else {
            setCharacters(characters.sort(function (a, b) {
                if (a.age && b.age)
                    return a.age.age - b.age.age;
            }));
            setOrder(false);
        }
    }

    return (

        <div className="b-container">
            <Header showSearch={false}></Header>
            <div className="c-chronology">
                <div className="c-simpleBar">
                    <div className="c-chronology__middle">
                        <SimpleBar style={{height: "100%"}}>
                        <div className="c-chronology__topTimeLine">
                            <div onClick={ordering} className="c-circle">
                                {characters[0] && <p className="c-circle__text">{characters[0].age.age}</p>}
                            </div>
                            <div className="c-arrow">
                                {order && <img src="/assets/images/flechaUp.svg" alt=""/>}
                                {!order && <img src="/assets/images/flechaDown.svg" alt=""/>}
                            </div>
                            <div className="c-arrow__down">
                            </div>
                        </div>
                            <div className="c-chronology__timeLine">
                                <div className="c-block">

                                    {characters.filter((c) => c.age).filter((b) => b.age.age).map((char, index) =>
                                        (index % 2 === 0) && <ChronologyBox character={char} key={index} leftPosition="true"/>
                                    )}

                                </div>
                                <div className="c-block">
                                    <div className="c-block--blank"></div>
                                    {characters.filter((c) => c.age).filter((b) => b.age.age).map((char, index) =>
                                        (index % 2 !== 0) && <ChronologyBox character={char} key={index}/>
                                    )}
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div>
    )
}
