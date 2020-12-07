import React from 'react';
import CharacterItem from "../CharacterItem/CharacterItem";
import './CharactersGallery.scss';

export default function CharactersGallery(props) {

    return (
        <div className="c-char-gallery container-fluid">
            <div className="row c-char-gallery__row">
                    {props.characters.filter((char, i) => (i<12)).map((character, index) =>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-2 c-char-gallery__item" key={index}>
                            <CharacterItem character={character}></CharacterItem>
                        </div>
                    )}
            </div>
        </div>
    )
}
