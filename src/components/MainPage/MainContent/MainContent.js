import React from 'react';
import Navigation from "./Navigation/Navigation";
import Cards from "./Cards/cards";
const MainContent = (props) => {
    return(
        <div>
            <main>
            <Navigation/>
            <Cards store = {props.store}/>
            </main>
        </div>



    )
}
export default MainContent;
