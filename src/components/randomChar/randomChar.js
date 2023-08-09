import React, {Component} from "react";
import styled from "styled-components";
import gotService from '../../services/gotService';
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

export default class RandomChar extends Component{

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService()
    state = {
        char:{},
        loading: true,
        error: false,
    }

    onCharLoaded = (char) =>{
        this.setState({char})
        this.setState({
            loading: false,
        })
    }

    updateChar(){
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCurrCharacters(id)
            .then(this.onCharLoaded)
    }

    onError = (error) =>{
        this.setState({
            error: true,
            loading: false
        })
    }

    render(){
        const {char, loading, error} = this.state

        const RandomCharContainer = styled.div`
          width: 25%;
          min-height: 200px;
          border: 1px solid black;
        `

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null

        return(
            <RandomCharContainer>
                {errorMessage}
                {spinner}
                {content}
            </RandomCharContainer>
        )

    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char

    return(
        <ul>
            <li>{name}</li>
            <li>{gender}</li>
            <li>{born}</li>
            {(died !== ""? <li>{died}</li>:"")}
            <li>{culture}</li>
        </ul>
    )
}