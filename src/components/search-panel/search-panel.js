import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    constructor (props) {
        super(props);
        
        this.state = {
            search: ''
        }
    }

    searchInp = (e) => {
        const input = e.target.value;
        this.setState({search: input});
        console.log(input)
        this.props.setSearch(input);
    }

    

    render () {
        return (
            <input 
            type="text"
            className='form-control search-input'
            placeholder='Find employee'
            value={this.state.search}
            onChange={this.searchInp}
            />
        )
    
    }
}

export default SearchPanel;