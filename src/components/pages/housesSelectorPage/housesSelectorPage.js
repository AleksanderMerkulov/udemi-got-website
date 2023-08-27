import React, {Component} from "react";

import RowBlock from "../../rowBlock/rowBlock";
import gotService from "../../../services/gotService"

export default class HousesSelectorPage extends Component{

    gotService = new gotService()

    render(){

        return(
            <RowBlock renderFunc={this.gotService.getAllHouses}
                      renderDetailFunc={this.gotService.getCurrHouses}
                      label={"Houses"}
                      title={(name)=>`${name}`}
            />
        )
    }
}
