import {Component} from 'react';
import './employees-form-add.css';


class EmployeesFormAdd extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            payrate: '', 
            classNames: "form-control new-post-label"
        }
    }

    onValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submt = (e) => {
        e.preventDefault();

        if (this.state.name.length>1 && this.state.payrate!== '') {
                    // prevent pages reload
        e.preventDefault();
        
        // call function to create new array element
        this.props.onAdd(this.state.name, this.state.payrate);

        // reset form and values
        this.setState({ name: '',payrate: ''});

        // return classes 
        this.setState({classNames: "form-control new-post-label"})
        e.target.reset()
        }

        else {
            this.setState(() => {
                return {
                    classNames: 'error'
                }
            })
             
        }
    }

    render () {
        return (
            <div className="app-add-form">
                <h3>Add employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.submt}
                    >
                    <input type="text"
                        className= {this.state.classNames}
                        placeholder="Name"
                        name = 'name'
                        onChange={this.onValue}
                        valuse={this.state.name}
                        />
                    <input type="number"
                        className={this.state.classNames}
                        placeholder="Payrate" 
                        name = 'payrate'
                        onChange={this.onValue}
                        valuse={this.state.payrate}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Add</button>
                </form>
            </div>
        )
    
    }
}

export default EmployeesFormAdd;