import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CharactersPage.scss';
import CharactersGallery from "./components/CharactersGallery/CharactersGallery";
import {Menu} from "../../shareds/components/Menu/Menu";
import {Header} from "../../core/components/Header/Header";

export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters').then(res => {
            setCharacters(res.data);
        });
    }, []);

    return (
        <div className="b-container">
            <Header></Header>
            <div className="c-main-char">
                <CharactersGallery characters={characters}></CharactersGallery>
            </div>
            <Menu></Menu>
        </div>

    )
}
