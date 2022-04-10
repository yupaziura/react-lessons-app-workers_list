import './app-info.css';

const AppInfo = ({total, test}) => {
    return (
      <div className="app-info">
          <h1>Employees list</h1>
          <h2>Total: {total}</h2>
          <h2>Benefits get: {test()} person</h2>
      </div>  
    )
}


export default AppInfo;