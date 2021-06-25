import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div>
                <img src={'/images/MySupermarket.com.svg'} alt="logo"/>
            </div>
            <div className={s.headerInput}>
                <input type="text" name="" placeholder="Postal Code, e.g. 123456"/>
                <button type="submit">Submit</button>
            </div>
            <div className={s.headerBucket}>
                <img src={'/images/bucket.png'} alt="bucket"/>
                <span>Your cart is empty</span>
            </div>
        </header>
    )
}
export default Header;