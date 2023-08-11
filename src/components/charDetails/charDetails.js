import React, {Component} from "react";
import gotService from '../../services/gotService'
import Spinner from "../spinner/spinner";

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
            this.updateChar()
        }
    }

    updateChar(){
        this.setState({
            loading: true,
        })

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

        if(!this.state.char){
            return <span>Не выбран персонаж</span>
        }

        // if(this.state.loading){
        //     return <Spinner/>
        // }

        const {name, gender, born, died, culture} = this.state.char

        return(
            <div className={"charDetails"}>
                <ul>
                    <li>{name}</li>
                    <li>{gender}</li>
                    <li>{born}</li>
                    {(died !== ""? <li>{died}</li>:"")}
                    <li>{culture}</li>
                </ul>
            </div>
        )
    }
}