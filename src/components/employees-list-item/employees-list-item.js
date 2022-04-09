import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {

    constructor (props) {
        super(props);
        this.state = {
            increase: false
        }
    }

    cookie = () => {
        this.setState(() => {
            return {increase: !this.state.increase}
        })
    }

    render () {

        const {name, payrate} = this.props;
        const {increase} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNames += ' increase';
        }
            
        
        return (
            <li className={classNames}>
                <span className="list-group-item-label">{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={payrate + '$'} />
                    <div className="d-flex justify-content-center align-items-center">
                        <button 
                            className="btn-cookie btn-sm"
                            type='button'
                            onClick={this.cookie}
                        >
                            <i className="fas fa-cookie"></i>
                        </button>
    
                        <button 
                            className="btn-trash btn-sm"
                            type='button'
                        >
                            <i className="fas fa-trash"></i>
                        </button>
    
                        <i className="fas fa-star"></i>
                    </div>
            </li>
        )
    
    }

}

export default EmployeesListItem;