import React, {Component} from "react";
import styled from "styled-components";
import gotService from '../../services/gotService';
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

export default class RandomChar extends Component{

    constructor() {
        super();
    }

    gotService = new gotService()
    state = {
        char:{},
        loading: true,
        error: false,
    }

    componentDidMount() {
        console.log('mounting')
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500)
    }

    componentWillUnmount() {
        console.log('unmounting')
        clearInterval(this.timerId)
    }

    onCharLoaded = (char) =>{
        this.setState({char})
        this.setState({
            loading: false,
        })
    }

    updateChar =() =>{
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCurrCharacters(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onError = () =>{
        this.setState({
            error: true,
            loading: false
        })
    }

    render(){
        const {char, loading, error} = this.state

        const RandomCharContainer = styled.div`
          width: 15%;
          min-height: 150px;
          border-radius: 8px;
          border: 1px solid #E0E0E0;
          background: #FFF;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          margin-top: 10px;
          padding: 14px;
          overflow: hidden;
          
          & .random-char__title{
            color: #463118;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          
          li{
            list-style: none;
          }
        `

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null


        return(
            <>
                <RandomCharContainer>
                    {errorMessage}
                    {spinner}
                    {content}
                </RandomCharContainer>
            </>
        )

    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char

    return(
        <ul>
            <li className={"random-char__title"}>Карточка персонажа</li>
            <li>{name}</li>
            <li>{gender}</li>
            <li>{born}</li>
            {(died !== ""? <li>{died}</li>:"")}
            <li>{culture}</li>
        </ul>
    )
}