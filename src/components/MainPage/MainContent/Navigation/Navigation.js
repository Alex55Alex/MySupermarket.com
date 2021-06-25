import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.titleFoods}>
            <ul className={s.breadcrumb}>
                <li><a href="#">All Grocceries</a></li>
                <li><a href="#">Most Popular</a></li>
                <li>Milk</li>
            </ul>
            <div className={s.sort}>
                <span>Sort by:</span>
                <a href="#">Recyclable in my area</a>
                <a href="#">Less Plastic</a>
            </div>
        </div>
    )
}
export default Navigation;