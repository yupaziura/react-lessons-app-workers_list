import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesFormAdd from '../employees-form-add/employees-form-add';


function App () {

    const data = [
        // if we paste here new obj
        // all will be rerendered
        // so we have to set id key
        {name: 'Yuliia Paziura', payrate: 1000, increase: true, id: 0},
        {name: 'Max Solodko', payrate: 2000, increase: false, id: 1},
        {name: 'Nataliia Paziura', payrate: 3000, increase: true, id: 2}
    ];

    return (
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesFormAdd/>
        </div>
    )
}

export default App;