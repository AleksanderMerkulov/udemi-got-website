import React, {Component} from "react";

import RowBlock from "../../rowBlock/rowBlock";
import gotService from "../../../services/gotService"

export default class BookSelectorPage extends Component{

    gotService = new gotService()

    render(){

        return(
            <RowBlock renderFunc={this.gotService.getAllBooks}
                      renderDetailFunc={this.gotService.getCurrBook}
                      label={"Books"}
                      title={(name)=>`${name}`}
            />
        )
    }
}
