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
        {
          name: 'Sergey Dadonov',
          salary: 5000,
          increase: true,
          rise: false,
          id: 1,
        },
        {
          name: 'Igor Dadonov',
          salary: 1000,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: 'Yuliya Dadonova',
          salary: 2000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
    };
    this.maxId = 0;
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          } else {
            return item;
          }
        }),
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    if (name.length > 3 && salary > 0) {
      this.setState(({ data }) => {
        return {
          data: [
            ...data,
            {
              name: name,
              salary: salary,
              increase: false,
              rise: false,
              id: this.maxId++,
            },
          ],
        };
      });
    }
  };

  render() {
    const { data } = this.state;
    const employeesQty = data.length;
    const employeesOnRise = data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo
          employeesQty={employeesQty}
          employeesOnRise={employeesOnRise}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          data={data}
        />
        <EmployeesAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
