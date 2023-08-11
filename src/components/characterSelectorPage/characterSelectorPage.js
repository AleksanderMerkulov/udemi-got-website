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
          & .charDetails{
            margin-left: 10px;
          }

          & .charDetails li{
            list-style: none;
          }
        `

        return(
            <CharSelectorContainer>
                <ItemList onCharSelected={this.onCharSelected} />
                <CharDetails id={this.state.selectedChar}/>
            </CharSelectorContainer>
        )
    }
}
