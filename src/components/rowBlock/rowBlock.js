import React, {Component} from "react";
import styled from "styled-components";
import ItemList from "../itemList/itemList";
import ItemDetails, {Field} from "../itemDetails/itemDetails";

export default class RowBlock extends Component{

    state = {
        selectedItemId: null,
        error: false,
    }

    onItemSelected = (id) =>{
        console.log(`Selected char by ${id}`)
        this.setState({
            selectedItemId: id,
        })
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error", error)
        this.setState({
            error: true,
        })
    }

    render(){

        const Row = styled.div`
          display: flex;
        `

        return(
            <>
                <h4>{this.props.label}</h4>
                <Row>
                    <ItemList renderFunc={this.props.renderFunc}
                              itemLabel={this.props.itemLabel}
                              title={this.props.title}
                              selectedItemId = {this.state.selectedItemId}
                              onItemSelected={this.onItemSelected}
                    />
                    <ItemDetails selectedItemId = {this.state.selectedItemId}
                                 renderDetailFunc={this.props.renderDetailFunc}
                    >
                        <Field label={"name"} field={"name"} />
                        <Field label={"gender"} field={"gender"} />
                    </ItemDetails>
                </Row>
            </>
        )
    }
}