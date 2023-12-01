import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавить нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Имя нового соотрудника"
            className="form-control new-post-label"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            name="salary"
            value={salary}
            placeholder="Заработная плата в $"
            className="form-control new-post-label"
            onChange={this.onValueChange}
          />
          <button className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
