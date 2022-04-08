import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const EmployeesList = ({data}) => {

    const elem = data.map (item => {
       
        // item 
        // id: 2
        // increase: true
        // name: "Nataliia Paziura"
        // payrate: 3000

        // we get all from item object
        // and id
        const {id, ...itemData} = item;

        return (
            // <EmployeesListItem name = {item.name} payrate = {item.payrate}/>
            // we can use spread operator

            // set key props
            <EmployeesListItem key={id} {...itemData}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default EmployeesList;