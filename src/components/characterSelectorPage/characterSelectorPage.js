import React, {Component} from "react";
import ItemList from "../itemList/itemList";
import CharDetails from '../charDetails/charDetails'

import styled from "styled-components";

export default class CharacterSelectorPage extends Component{

    state = {
        selectedChar: null,
    }

    onCharSelected = (id) =>{
        console.log(id)
        this.setState({
            selectedChar: id,
        })
    }

    render(){

        const CharSelectorContainer = styled.div`
          display: flex;
          margin-top: 10px;
        `

        return(
            <CharSelectorContainer>
                <ItemList className={"item-list"} onCharSelected={this.onCharSelected} selectedCharId={this.state.selectedChar} />
                <CharDetails className={"char-details"} id={this.state.selectedChar}/>
            </CharSelectorContainer>
        )
    }
}
