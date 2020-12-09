import React from 'react';
import CharacterItem from "../CharacterItem/CharacterItem";
import './CharactersGallery.scss';

export default function CharactersGallery(props) {
    return (
        <div className="c-char-gallery container-fluid">
            <div className="row">
                    {props.characters.filter((char, i) => (i < 12)).map((character, index) =>
                        <div className="char-container col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2" key={index}>
                            <CharacterItem character={character}></CharacterItem>
                        </div>
                    )}
            </div>
        </div>
    )
}
