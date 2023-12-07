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
      term: '',
      filterBy: 'all-employees',
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

  searchEmployee = (term, employees) => {
    const { data } = this.state;

    if (term.length > 0) {
      return data.filter((item) => item.name.indexOf(term) > -1);
    } else {
      return employees;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onUpdateFilter = (filterBy) => {
    this.setState({ filterBy });
  };

  filterEmployees = () => {
    const { data, filterBy } = this.state;

    if (filterBy === 'on-rise') {
      return data.filter((item) => item.rise === true);
    } else if (filterBy === 'salary') {
      return data.filter((item) => item.salary > 1000);
    } else {
      return data;
    }
  };

  render() {
    const { data, term } = this.state;
    const employeesQty = data.length;
    const employeesOnRise = data.filter((item) => item.increase).length;
    const filteredData = this.filterEmployees();
    const visibleData = this.searchEmployee(term, filteredData);

    return (
      <div className="app">
        <AppInfo
          employeesQty={employeesQty}
          employeesOnRise={employeesOnRise}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} />
        </div>
        <EmployeesList
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          data={visibleData}
        />
        <EmployeesAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
