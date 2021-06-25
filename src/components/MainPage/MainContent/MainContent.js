import React from 'react';
import Navigation from "./Navigation/Navigation";
import Cards from "./Cards/Cards";
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
