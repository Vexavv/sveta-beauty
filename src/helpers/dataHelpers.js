import React from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card/Card";



export  const renderDataList = (data, style) => {
    return (
        <ul className={style}>
            {data.map(item => (
                <li key={item.id}>
                    <Link to="/services">{item.title} </Link>
                </li>
            ))}
        </ul>
    );
}

export  const renderPriceList = (data, style) => {
    return (
        <ul className={style}>
            {data.map(item => (
                <li key={item.id}>
                    <Link to="/services">{item.title}: <span>{item.minPrice}</span> гривень </Link>
                </li>
            ))}
        </ul>
    );
}
export const renderCard = (data,style) => {
    return(
        <ul className={style}>
            {
                data.map((item) => {
                    return <Card key={item.id} {...item} item={item}/>
                })
            }
        </ul>


        );


}