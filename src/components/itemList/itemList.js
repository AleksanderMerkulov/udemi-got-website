import React, {Component} from "react";
import gotService from '../../services/gotService';
import Spinner from "../spinner/spinner";
import styled from "styled-components";
import './itemList.css'


export default class ItemList extends Component{

    gotService = new gotService()
    state = {
        charList: null,
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList)=>{
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr){

        const firstID = 21

        const Li = styled.li`
          border: 1px solid #463118;
        `


        return arr.map((item, i)=>{

            const selectedClass = (this.props.selectedCharId === (firstID + i)) ? "selected" : null

            return(
                <Li
                    className={selectedClass}
                    key={`charItem${i}`}
                    onClick={()=>{this.props.onCharSelected(firstID + i)}}
                >
                    {item.name}
                </Li>
            )
        })
    }

    render(){
        const {charList} = this.state

        if(!charList){
            return <Spinner/>
        }

        const items = this.renderItems(charList)

        return(
            <ul>
                {items}
            </ul>
        )
    }
}