import './App.css';
import Header from "./components/header/header";
import RandomChar from "./components/randomChar/randomChar";
import {Component} from "react";
import ItemList from "./components/itemList/itemList";


export default class App extends Component{

    state={
        renderRandomChar: true,
        // selectedChar: null,
    }

    rerenderRandom = () =>{
        const rerender = !this.state.renderRandomChar
        this.setState({
            renderRandomChar: rerender,
        })
    }

    // onCharSelected = (id) =>{
    //     this.setState({
    //         selectedChar: id,
    //     })
    // }

    render(){

        const randomChar = this.state.renderRandomChar ? <RandomChar/> : null

        return (
            <div className="App">
                <Header></Header>
                {randomChar}
                <button onClick={this.rerenderRandom}>toggle character</button>
                {/*<ItemList onCharSelected={this.onCharSelected} />*/}
            </div>
        );
    }

}

