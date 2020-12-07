import React from 'react';
import './CharactersGallery.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function CharactersGallery (props) {

    return (
        <div className="c-char-gallery">
            <SimpleBar style={{maxHeight: 600 }}>
            {props.characters.map((character, index) =>
                <p key={index}>{character.name}</p>
            )}
            </SimpleBar>
        </div>
    )
}
