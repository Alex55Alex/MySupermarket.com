import './App.css';
import MainPage from "./components/MainPage/MainPage";

function App(props) {
    return (
        <div className={"app-wrapper"}>
            <MainPage store ={props.store}/>

        </div>
    );
}

export default App;
