import './App.css';
import Header from "./components/header/header";
import RandomChar from "./components/randomChar/randomChar";
import CharacterSelectorPage from "./components/characterSelectorPage/characterSelectorPage";
import {Component} from "react";


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
                <CharacterSelectorPage/>
            </div>
        );
    }

}

