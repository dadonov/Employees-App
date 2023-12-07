import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { 'filter-by': '' };
  }

  onHandleClick = (e) => {
    const targetAtrribute = e.target.getAttribute('filter-by');
    this.setState({ 'filter-by': targetAtrribute });
    this.props.onUpdateFilter(targetAtrribute);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          onClick={this.onHandleClick}
          type="button"
          filter-by="all-employees"
        >
          Все сотрудники
        </button>
        <button
          className="btn btn-outline-light"
          onClick={this.onHandleClick}
          type="button"
          filter-by="on-rise"
        >
          На повышение
        </button>
        <button
          className="btn btn-outline-light"
          onClick={this.onHandleClick}
          type="button"
          filter-by="salary"
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
