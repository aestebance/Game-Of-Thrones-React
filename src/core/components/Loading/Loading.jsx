import React, { useContext } from 'react';
import './Loading.scss';
import LoadingContext from "../../../shareds/contexts/LoadingContext";

export default function Loading() {

    const {isLoading} = useContext(LoadingContext);

    return (
        <div className={isLoading ? 'c-loading c-loading--loading' : 'c-loading'}>
            <div className="lds-hourglass"></div>
        </div>
    )
}
