import React, {Component} from "react";
import ItemList from "../itemList/itemList";
import CharDetails from '../charDetails/charDetails'

import styled from "styled-components";
import ErrorMessage from "../errorMessage/errorMessage";

export default class CharacterSelectorPage extends Component{

    state = {
        selectedChar: null,
        error: false,
    }

    onCharSelected = (id) =>{
        console.log(id)
        this.setState({
            selectedChar: id,
        })
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error", error)
        this.setState({
            error: true,
        })
    }

    render(){

        const CharSelectorContainer = styled.div`
          display: flex;
          margin-top: 10px;
        `

        if(this.state.error){
            return <ErrorMessage/>
        }

        return(
            <CharSelectorContainer>
                <ItemList className={"item-list"} onCharSelected={this.onCharSelected} selectedCharId={this.state.selectedChar} />
                <CharDetails className={"char-details"} id={this.state.selectedChar}/>
            </CharSelectorContainer>
        )
    }
}
