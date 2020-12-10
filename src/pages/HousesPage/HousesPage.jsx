import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './HousesPage.scss';
import {Menu} from "../../shareds/components/Menu/Menu";
import {Header} from "../../core/components/Header/Header";
import HousesGallery from "./components/HousesGallery/HousesGallery";

let allHouses = [];

export default function HousesPage() {
    const [houses, setHouses] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses').then(res => {
            res.data.map((house) => {
                if (house.logoURL) {
                    allHouses.unshift(house);
                } else {
                    allHouses.push(house);
                }
            });
            setHouses(allHouses);
            setLoader(false);
        });
    }, []);

    const fnSearch = (data) => {
        const filteredHouses = allHouses.filter((char) => char.name.toLowerCase().includes(data.search.toLowerCase()));
        setHouses(filteredHouses);
    }

    return (
        <div className="b-container">
            {loader && <div className="b-loader">
                <div className="lds-hourglass"></div>
            </div>}
            <Header fnSearch={fnSearch} showSearch={true}></Header>
            <div className="c-main-house">
                <HousesGallery houses={houses}></HousesGallery>
            </div>
            <Menu></Menu>
        </div>

    )
}

