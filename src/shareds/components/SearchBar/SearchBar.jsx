import React from 'react';
import {useForm} from "react-hook-form";
import './SearchBar.scss';

export function SearchBar(props) {

    const {register, handleSubmit} = useForm();

    const  onChange = (data) => {
        props.fnChange(data);
    }

    return (
        <div className="c-searchBar">
            <img className="c-searchBar__image" src="/assets/images/search.svg" alt="search"></img>
            <form className="c-searchBar__form" onChange={handleSubmit(onChange)}>
                <input className="b-input" placeholder="Buscar..." type="text" name="search" ref={register}/>
            </form>
        </div>
    )
}
