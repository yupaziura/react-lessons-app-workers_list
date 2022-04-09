import {Component} from 'react';
import './employees-form-add.css';


class EmployeesFormAdd extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            payrate: ''
        }
    }

    onValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render () {
        return (
            <div className="app-add-form">
                <h3>Add employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name = 'name'
                        onChange={this.onValue}
                        valuse={this.state.name}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Payrate" 
                        name = 'payrate'
                        onChange={this.onValue}
                        valuse={this.state.payrate}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    
    }
}

export default EmployeesFormAdd;