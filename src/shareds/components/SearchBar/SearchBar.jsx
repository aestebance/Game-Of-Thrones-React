import React, { useContext } from 'react';
import {useForm} from "react-hook-form";
import './SearchBar.scss';
import SearchContext from "../../contexts/SearchContext";

export function SearchBar(props) {

    const {register, handleSubmit} = useForm();
    const {setSearch} = useContext(SearchContext);

    const  onChange = (data) => {
        setSearch(data);
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
