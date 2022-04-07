import './employees-form-add.css';


const EmployeesFormAdd = () => {
    return (
        <div className="app-add-form">
            <h3>Add employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Payrate" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default EmployeesFormAdd;