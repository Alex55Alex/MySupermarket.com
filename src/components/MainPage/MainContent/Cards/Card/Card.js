import React from 'react';
import s from './Card.module.css'

const Card = (props) => {
    const imageUrl = `/images/${props.itemImage}.png`;
    return (
        <div style={{backgroundColor: `${props.bgColor}`}} className={s.card}>
            <div onClick={() => console.log("card")} className={s.link}></div>
            <div className={s.cardTitle}>
                <h4 title={props.title}>{props.title}</h4>
                <p>{props.volume}</p>
                <button onClick={() => console.log("vector")}>
                    <img src={'/images/Vector.png'} alt="img"/>
                    <span>{props.recyclable}</span>
                </button>
            </div>
            <img src={imageUrl}/>
            <div className={s.areaBlock}>
                <span>{props.price}</span>
            </div>
            <div className={s.cardCount}>
                <button onClick={() => console.log("btn")} className={s.myBtn}>Add</button>
            </div>

        </div>
    )
}
export default Card;