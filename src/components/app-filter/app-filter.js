import './app-filter.css';


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
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
                type ="button">
                    Hight payrate 
            </button>
        </div>
    )
} 


export default AppFilter;