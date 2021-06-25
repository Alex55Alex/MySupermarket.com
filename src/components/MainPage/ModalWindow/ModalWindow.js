import React from 'react';
import s from './ModalWindow.module.css'

const ModalWindow = (props) => {
    return (
        <div id="myModal" className={s.modal}>
            <div className={s.modalContent}>
                <div className={s.modalImg}>
                    <img src="/images/milk01.png" alt=""/>
                </div>
                <div className={s.modalText}>
                    <h3>Semi Skimmed Low Fat Milk</h3>
                    <p className={s.pints}>2,272 L / 4 Pints</p>
                    <button>
                        <img src="/images/Vector.png" alt="img"/>
                            <span>recyclable in you area</span>
                    </button>
                    <p className={s.modalParagraff}>Attachment apartments in delightful by motionless it no. <br/>And now
                        she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her
                            motionless not collecting age.</p>
                    <div className={s.priceAdd}>
                        <span>£  2.05</span>
                        <button>Add</button>
                    </div>
                    <div className={s.modalRecycle}>
                        <span>How to recycle</span>
                        <p>Attachment apartments in delightful by motionless it no. <br/>And now she burst sir learn
                            total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not
                            collecting age.</p>
                    </div>
                    {/*<img className="close" src="/images/close.png" alt="close"/>*/}
                </div>
            </div>
        </div>
    )
}
export default ModalWindow;