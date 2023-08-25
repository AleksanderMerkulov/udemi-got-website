import React, {Component} from "react";
import gotService from '../../services/gotService'
import Spinner from "../spinner/spinner";
import styled from "styled-components";

const Field = ({item, field, label}) => {
    return(
        <li>{`${label}: ${item[field]}`}</li>
    )
}
export {
    Field
}


export default class ItemDetails extends Component{

    state = {
        item: null,
        loading: false,
        error: false,
    }

    // gotService = new gotService()

    componentDidMount() {
        if(this.props.selectedItemId){
            this.updateItem()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectedItemId !== prevProps.selectedItemId){
            this.setState({
                loading: true,
            })

            this.updateItem()
        }
    }

    // componentDidCatch(error, errorInfo) {
    //     this.setState({
    //         error: true,
    //     })
    // }

    updateItem(){

        // const {renderDetailFunc} = this.props

        this.props.renderDetailFunc(this.props.selectedItemId)
            .then((updatedItem)=>{
                console.log(updatedItem)
                this.setState({
                    item:updatedItem,
                    loading: false,
                })
            })
    }

    render() {
        if(!this.state.item){
            return <span>Не выбран персонаж</span>
        }
        //
        // if(this.state.loading){
        //     return <Spinner/>
        // }


        // const noSelectedChar = !this.state.char ? <span>Не выбран персонаж</span> : null
        // const spinner = this.state.loading ? <Spinner/> : null

        const ItemDetails = styled.div`
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
        const {item} = this.state
        // const {name, gender, born, died, culture} = char

        return(
            <ItemDetails>
                {/*{noSelectedChar}*/}
                {/*{spinner}*/}
                {/*<CharInfoDetail char={this.state.char}/>*/}
                <ul>
                    <li className={"random-char__title"}>Карточка персонажа</li>
                    {
                        React.Children.map(this.props.children, (child)=>{
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </ItemDetails>
        )
    }
}