import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesFormAdd from '../employees-form-add/employees-form-add';
import {Component} from 'react'


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                // if we paste here new obj
                // all will be rerendered
                // so we have to set id key
                {name: 'Yuliia Paziura', payrate: 1000, increase: true, rise: false, id: 0},
                {name: 'Max Solodko', payrate: 2000, increase: false, rise: true, id: 1},
                {name: 'Nataliia Paziura', payrate: 3000, increase: false, rise: false, id: 2}
            ],
            search: '',
            idMin: 2, 
            filter: 'all',
        }
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter (item => item.id !== id)
            }
        })
    }

    addItem = ( name, payrate) => {
        
        this.setState(() => {
            // create a copy for array
            let newArr = JSON.parse(JSON.stringify(this.state.data));
            
            // construct new item and push to copied array
            const item = {name: name, payrate: payrate, increase: false, rise: false, id: this.state.idMin + 1 }
            newArr.push(item)

            return {data: newArr, idMin: this.state.idMin + 1}
        })
    }

    toggleIncr = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id){
                        return {...item, increase: !item.increase}
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }

    toggleRise = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id){
                        return {...item, rise: !item.rise}
                    }
                    else {
                        return item;
                    }
                })
            }
        })    }

    filterIncr = () => {
        const newArr = this.state.data.filter(item => item.increase === true);
        return newArr.length
    }

    onSearch = (data, search) => {
        if (search.length === 0) {
            return data
        }
       
        return  data.filter((i) => {
            return i.name.indexOf(search) > -1
        })
        
    }

    setSearch = (text) => {
        this.setState({search: text});
        
    }

    filterButtons = (data, filter) => {
        if (filter === 'star') {
            return data.filter((item) => {
                return item.rise
            })
        }
        else if (filter === 'cookie'){
            return data.filter((item) => {
                return item.increase 
            })  
        }
        return data
    }

    setFilter = (filter) => {
        this.setState({filter: filter})
    }


    render() {

        const filteredData = this.filterButtons(this.onSearch(this.state.data, this.state.search), this.state.filter);

        return (
            <div className="app">
                <AppInfo  total={filteredData.length} test={this.filterIncr}/>
    
                <div className="search-panel">
                    <SearchPanel setSearch={this.setSearch}/>
                    <AppFilter filter={this.state.filter} setFilter={this.setFilter}/>
                </div>
    
                <EmployeesList  toggleIncr={this.toggleIncr} 
                                toggleRise={this.toggleRise} 
                                data={filteredData} 
                                onDelete={this.deleteItem}/>
    
                <EmployeesFormAdd onAdd={(name, payrate) => this.addItem(name, payrate)}/>
            </div>
        )
    
    }
}

export default App;