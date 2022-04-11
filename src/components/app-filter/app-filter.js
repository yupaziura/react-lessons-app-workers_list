import {Component} from 'react';
import './app-filter.css';


class AppFilter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    setStar = () => {
        this.setState({filter: 'star'});
        this.props.onFilterBtn(this.state.filter)
    }

    render() {

        const btnsData = [
            {name: 'all', text: 'All employees'},
            {name: 'cookie', text: 'Promotion'},
            {name: 'star', text: 'Hight payrate '},
        ];


        const buttons = btnsData.map(({name, text}) => {
            let active;

            if (this.props.filter === name) {
                active = true
            }
            else {
                active = false
            }

            const classBtn = active? 'btn-light' : 'btn-outline-light';

            return (
                <button 
                    className = {`btn ${classBtn}`}
                    type ="button"
                    key={name}
                    onClick = {() => this.props.setFilter(name)}
                    >
                        {text}
                </button>
            )
        })

        return (
            <div className="btn-group">

            {buttons}
                {/* <button 
                    className="btn btn-light"
                    type ="button">
                        All employees
                </button>
    
                <button 
                    className="btn btn-outline-light"
                    type ="button">
                        Promotion
                </button>
    
                <button 
                    className="btn btn-outline-light"
                    type ="button"
                    >
                        Hight payrate 
                </button> */}
            </div>
        )    
    }
} 


export default AppFilter;