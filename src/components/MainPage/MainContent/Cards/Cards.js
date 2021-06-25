import React from 'react';
import s from './Cards.module.css'
import Card from "./Card/Card";

const Cards = (props) => {
    return (
        <div className={s.cardContainer}>
            {
                props.store.items.map((item) => {
                   return <Card title={item.title} volume={item.volume} recyclable={item.recyclable} itemImage={item.itemImage}
                                price={item.price} bgColor = {item.bgColor}/>
                })
            }
        </div>
    )
}
export default Cards;