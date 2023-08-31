import './App.css';
import Header from "./components/header/header";
import RandomChar from "./components/randomChar/randomChar";
import {Component} from "react";
import CharacterSelectorPage from "./components/pages/characterSelectorPage/characterSelectorPage";
import HousesSelectorPage from "./components/pages/housesSelectorPage/housesSelectorPage";
import BookSelectorPage from "./components/pages/bookSelectorPage/bookSelectorPage";

import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";

export default class App extends Component{

    state={
        renderRandomChar: true,
    }


    rerenderRandom = () =>{
        const rerender = !this.state.renderRandomChar
        this.setState({
            renderRandomChar: rerender,
        })
    }



    render(){

        const randomChar = this.state.renderRandomChar ? <RandomChar/> : null

        return (
                <div className="App">
                    <Header></Header>
                    {randomChar}
                    <button onClick={this.rerenderRandom}>toggle character</button>

                    <Outlet/>

                </div>
        );
    }

}

