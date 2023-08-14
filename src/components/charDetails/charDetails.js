import React, {Component} from "react";
import gotService from '../../services/gotService'
import Spinner from "../spinner/spinner";
import styled from "styled-components";

export default class CharDetails extends Component{

    state = {
        char: null,
        loading: false,
        error: false,
    }

    gotService = new gotService()

    componentDidMount() {
        if(this.props.id){
            this.updateChar()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.id !== prevProps.id){
            this.setState({
                loading: true,
            })

            this.updateChar()
        }
    }

    updateChar(){

        this.gotService.getCurrCharacters(this.props.id)
            .then((charItem)=>{
                console.log(charItem)
                this.setState({
                    char:charItem,
                    loading: false,
                })
            })
    }

    render() {

        if(!this.state.char && !this.state.loading){
            return <span>Не выбран персонаж</span>
        }
        //
        if(this.state.loading){
            return <Spinner/>
        }

        // const noSelectedChar = !this.state.char ? <span>Не выбран персонаж</span> : null
        // const spinner = this.state.loading ? <Spinner/> : null

        const CharDetails = styled.div`
          width: 15%;
          min-height: 100px;
          border-radius: 8px;
          border: 1px solid #E0E0E0;
          background: #FFF;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          margin-top: 10px;
          margin-left: 10px;
          padding: 14px;

          & .random-char__title {
            color: #463118;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          li {
            list-style: none;
          }
        `

        return(
            <CharDetails>
                {/*{noSelectedChar}*/}
                {/*{spinner}*/}
                <CharInfoDetail char={this.state.char}/>
            </CharDetails>
        )
    }
}


const CharInfoDetail = ({char}) =>{

    if(!char){
        return null
    }

    const {name, gender, born, died, culture} = char

    return(
        <ul>
            <li className={"random-char__title"}>Карточка персонажа</li>
            <li>{name}</li>
            <li>{gender}</li>
            <li>{born}</li>
            <li>{died}</li>
            <li>{culture}</li>
        </ul>
    )
}