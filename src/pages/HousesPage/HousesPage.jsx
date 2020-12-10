import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import './HousesPage.scss';
import {Menu} from "../../shareds/components/Menu/Menu";
import {Header} from "../../core/components/Header/Header";
import HousesGallery from "./components/HousesGallery/HousesGallery";
import LoadingContext from "../../shareds/contexts/LoadingContext";
import SearchContext from "../../shareds/contexts/SearchContext";

let allHouses = [];

export default function HousesPage() {
    const [houses, setHouses] = useState([]);
    const {setIsLoading} = useContext(LoadingContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/houses').then(res => {

            allHouses = [];
            // eslint-disable-next-line array-callback-return
            res.data.map((house) => {
                if (house.logoURL) {
                    allHouses.unshift(house);
                } else {
                    allHouses.push(house);
                }
            });
            setHouses(allHouses);
            setIsLoading(false);
        });
    }, [setIsLoading]);

    useEffect(() => {
        if (search) {
            const filteredHouses = allHouses.filter((char) => char.name.toLowerCase().includes(search.search.toLowerCase()));
            setHouses(filteredHouses);
        }
    }, [search])


    return (
        <div className="b-container">
            <SearchContext.Provider value={{search, setSearch}}>
                <Header showSearch={true}></Header>
                <div className="c-main-house">
                    <HousesGallery houses={houses}></HousesGallery>
                </div>
                <Menu></Menu>
            </SearchContext.Provider>
        </div>

    )
}

