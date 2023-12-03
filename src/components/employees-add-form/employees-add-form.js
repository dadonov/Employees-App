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

  handleFormSubmit = (e) => {
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(this.state.name, this.state.salary);
    this.setState({ name: '', salary: '' });
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
          <button
            onClick={(e) => this.handleFormSubmit(e)}
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
