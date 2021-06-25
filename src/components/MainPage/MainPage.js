import React from 'react';
import s from './MainPage.module.css'
import Header from './Header/Header'
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";
import ModalWindow from "./ModalWindow/ModalWindow";
const MainPage = (props) =>{
    return(
    <div>
        <Header/>
        <MainContent store = {props.store}/>
        <Footer/>
        <ModalWindow/>
    </div>
        
    )
    
}
export default MainPage;