import React, {Component} from "react";

import RowBlock from "../../rowBlock/rowBlock";
import gotService from "../../../services/gotService"

export default class CharacterSelectorPage extends Component{

    gotService = new gotService()

    render(){

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
