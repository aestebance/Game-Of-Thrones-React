import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CharactersPage.scss';
import CharactersGallery from "./components/CharactersGallery/CharactersGallery";
import {Menu} from "../../shareds/components/Menu/Menu";
import {Header} from "../../core/components/Header/Header";

let allCharacters = [];

export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters').then(res => {
            allCharacters = res.data;
            setCharacters(allCharacters);
        });
    }, []);

    const fnSearch = (data) => {
        const filteredCharacters = allCharacters.filter((char) => char.name.toLowerCase().includes(data.search.toLowerCase()));
        setCharacters(filteredCharacters);
    }

    return (
        <div className="b-container">
            <Header fnSearch={fnSearch} showSearch={true}></Header>
            <div className="c-main-char">
                <CharactersGallery characters={characters}></CharactersGallery>
            </div>
            <Menu></Menu>
        </div>

    )
}
