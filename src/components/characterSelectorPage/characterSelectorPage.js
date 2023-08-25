import React, {Component} from "react";

import styled from "styled-components";
import ErrorMessage from "../errorMessage/errorMessage";
import RowBlock from "../rowBlock/rowBlock";
import gotService from "../../services/gotService"

export default class CharacterSelectorPage extends Component{

    gotService = new gotService()

    render(){

        // if(this.state.error){
        //     return <ErrorMessage/>
        // }

        return(
            <RowBlock renderFunc={this.gotService.getAllCharacters}
                      renderDetailFunc={this.gotService.getCurrCharacters}
                      label={"Characters"}
                      itemLabel={["name", "gender"]}
                      title={(name, gender)=>`${name} ${gender}`}
            />
        )
    }
}
