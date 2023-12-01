import { Component } from 'react';
import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Sergey', surname: 'Dadonov', increase: true, id: 1 },
        { name: 'Igor', surname: 'Dadonov', increase: false, id: 2 },
        { name: 'Yuliya', surname: 'Dadonova', increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter((item) => item.id !== id)
      }
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList onDelete={this.deleteItem} data={data} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
