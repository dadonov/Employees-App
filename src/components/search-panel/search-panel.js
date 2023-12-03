import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;

    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Найти сотрудника"
        className="form-control search-input"
        onChange={this.onUpdateSearch}
        value={this.state.term}
      />
    );
  }
}

export default SearchPanel;
