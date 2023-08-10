import React, {Component} from "react";
import gotService from '../../services/gotService';
import Spinner from "../spinner/spinner";


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
        return arr.map((item, i)=>{
            return(
                <li
                    key={`charItem${i}`}
                    onClick={this.props.onCharSelected(i)}>
                    {item.name}
                </li>
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