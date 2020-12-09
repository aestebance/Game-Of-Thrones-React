import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharactersGallery from "./components/CharactersGallery/CharactersGallery";

export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters').then(res => {
            setCharacters(res.data);
        });
    }, []);

    return (
            <div className="b-container">
                <CharactersGallery characters={characters}></CharactersGallery>
            </div>

    )
}
