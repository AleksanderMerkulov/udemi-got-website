import React, {Component} from "react";
import styled from "styled-components";
import gotService from '../../services/gotService';

export default class RandomChar extends Component{

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService()
    state = {
        char:{}
    }

    onCharLoaded = (char) =>{
        this.setState({char})
    }

    updateChar(){
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCurrCharacters(id)
            .then(this.onCharLoaded)
    }

    render(){
        const {char:{name, gender, born, died, culture}} = this.state

        const RandomCharContainer = styled.div`
          border: 1px solid black;
        `

        return(
            <RandomCharContainer>
                <ul>
                    <li>{name}</li>
                    <li>{gender}</li>
                    <li>{born}</li>
                    {(died !== ""? <li>{died}</li>:"")}
                    <li>{culture}</li>
                </ul>
            </RandomCharContainer>
        )

    }
}