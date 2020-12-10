import React from 'react';
import './HousesGallery.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import HouseItem from "../HouseItem/Houseitem";

export default function HousesGallery(props) {
    return (
        <SimpleBar style={{height: "100%"}}>
            <div className="c-house-gallery container-fluid">
                <div className="row">
                    {props.houses.map((house, index) =>
                        <div className="house-container col-12 col-sm-6  col-md-4 col-lg-3 col-xl-2" key={index}>
                            <HouseItem house={house}></HouseItem>
                        </div>
                    )}
                </div>
            </div>
        </SimpleBar>
    )
}
