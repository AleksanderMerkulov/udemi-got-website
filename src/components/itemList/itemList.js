import React, {Component} from "react";
import Spinner from "../spinner/spinner";
import styled from "styled-components";
import './itemList.css'


export default class ItemList extends Component{

    state = {
        itemList: null,
    }

    componentDidMount() {
        this.props.renderFunc()
            .then((itemList)=>{
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr){

        const firstID = 21

        const Li = styled.li`
          border: 1px solid #463118;
        `


        return arr.map((item, i)=>{
            const selectedClass = (this.props.selectedItemId === (firstID + i)) ? "selected" : null

            //Создание заголовка
            let label = this.props.title(item.name)

            return(
                <Li
                    className={selectedClass}
                    key={`charItem${i}`}
                    onClick={()=>{this.props.onItemSelected(firstID + i)}}
                >
                    {label}
                </Li>
            )
        })
    }

    render(){
        const {itemList} = this.state

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return(
            <ul>
                {items}
            </ul>
        )
    }
}