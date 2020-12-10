import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import './CharactersPage.scss';
import CharactersGallery from "./components/CharactersGallery/CharactersGallery";
import {Menu} from "../../shareds/components/Menu/Menu";
import {Header} from "../../core/components/Header/Header";
import LoadingContext from "../../shareds/contexts/LoadingContext";
import SearchContext from "../../shareds/contexts/SearchContext";

let allCharacters = [];

export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const {setIsLoading} = useContext(LoadingContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://api.got.show/api/show/characters').then(res => {
            allCharacters = res.data;
            setCharacters(allCharacters);
            setIsLoading(false);
        });
    }, [setIsLoading]);

    useEffect(() => {
        if (search) {
            const filteredCharacters = allCharacters.filter((char) => char.name.toLowerCase().includes(search.search.toLowerCase()));
            setCharacters(filteredCharacters);
        }
    }, [search])

    return (
        <div className="b-container">
            <SearchContext.Provider value={{search, setSearch}}>
                <Header showSearch={true}></Header>
                <div className="c-main-char">
                    <CharactersGallery characters={characters}></CharactersGallery>
                </div>
                <Menu></Menu>
            </SearchContext.Provider>
        </div>

    )
}
