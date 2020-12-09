import React from 'react';
import CharacterItem from "../CharacterItem/CharacterItem";
import './CharactersGallery.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function CharactersGallery(props) {
    return (
        <div className="c-char-gallery container-fluid">
            <SimpleBar style={{height: "100%"}}>
                <div className="row">
                    {props.characters.filter((char, i) => (i < 24)).map((character, index) =>
                        <div className="char-container col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2" key={index}>
                            <CharacterItem character={character}></CharacterItem>
                        </div>
                    )}
                </div>
            </SimpleBar>
        </div>
    )
}
