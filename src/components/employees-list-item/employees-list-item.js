import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      favorite: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };

  onFavorite = () => {
    this.setState(({ favorite }) => ({ favorite: !favorite }));
  };

  render() {
    const { name, surname, salary, id, onDelete } = this.props;
    const { increase, favorite } = this.state;

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }

    if (favorite) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span onClick={this.onFavorite} className="list-group-item-label">
          {name} {surname}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue="1000$"
        />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={this.onIncrease} className="btn-cookie btn-sm">
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm">
            <i onClick={onDelete } className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
