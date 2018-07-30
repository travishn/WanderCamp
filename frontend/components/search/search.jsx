import React from 'react';
import { Redirect } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: '', 
    start_date: '', 
    end_date: '',
    };
  }

  handleChange(field) {
    return (e) => this.setState( {[field]: e.target.value} );
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchListings(this.state.search)
      .then(this.props.history.push('/discover'));
  }

  render() {
    const {minDate} = this.props;
    
    return (
      
      <form onSubmit={(e) => this.handleSubmit(e)} className="search-form">
        <input
          value={this.state.search}
          onChange={this.handleChange('search')}
          className="search-bar"
          placeholder="Finding camping near..."
        />

        <div className="search-dates">
          <div className="search-check-in">
            <h5>Check In</h5>
            <input
              type="date"
              min={minDate}
              max={this.state.end_date}
              value={this.state.start_date}
              onChange={this.handleChange("start_date")}
              className="start-date-input"
            />
          </div>

          <div className="search-check-out">
            <h5>Check Out</h5>
            <input
              type="date"
              min={this.state.start_date}
              value={this.state.end_date}
              onChange={this.handleChange("end_date")}
              className="start-date-input"
            />
          </div>

          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;