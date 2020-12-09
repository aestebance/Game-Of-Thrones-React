import React from 'react';
import { useParams } from 'react-router-dom'

export default function CharacterDetail() {
    const name = useParams().name;
    return (
        <div>
            Hola desde {name}
        </div>
    )
}
