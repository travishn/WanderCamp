import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // allows for re-rendering upon local state change
  }

  toggleBoolean(field) {
    const { filters, receiveFilter, removeFilter } = this.props;

    return (e) => {
      if (filters[field]) removeFilter(field);
      else receiveFilter(field);
    };
  }

  togglePriceFilter(price) {
    const { filters, receivePriceFilter, removePriceFilter } = this.props;

    return (e) => {
      if (filters['price'] === price) removePriceFilter(price);
      else receivePriceFilter(price);
    };
  }

  toggleCapacityFilter(capacity) {
    const { filters, receiveGroupFilter, removeGroupFilter } = this.props;

    return (e) => {
      if (filters['capacity'] === capacity) removeGroupFilter(capacity);
      else receiveGroupFilter(capacity);
    };
  }

  render() {
    const { filters } = this.props;
    
    return (
      <div className="filters-container">
        <h2>Search Filters</h2>
        

        <h3>Camping Type</h3>
        <ul>
          <li className='filter-item'>
            <input 
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('camping')}
              checked={filters['camping'] === true}
              onChange={function() {}}
              />
              <label>Camping</label>
          </li>
          <li className='filter-item'>
            <input 
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('glamping')}
              checked={filters['glamping'] === true}
              onChange={function() {}}
              />
              <label>Glamping</label>
          </li>
          <li className='filter-item'>
            <input 
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('petFriendly')}
              checked={filters['petFriendly'] === true}
              onChange={function() {}}
              />
              <label>Pet Friendly</label>
          </li>
        </ul>

        <h3>Pricing</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(122493)}
              checked={filters['price'] === 122493}
              onChange={function() {}}
              />
              <label>Any Price</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(25)}
              checked={filters['price'] === 25}
              onChange={function() {}}
              />
              <label>Under $25</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(50)}
              checked={filters['price'] === 50}
              onChange={function() {}}
              />
              <label>Under $50</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(75)}
              checked={filters['price'] === 75}
              onChange={function() {}}
              />
              <label>Under $75</label>
          </li>
        </ul>

        <h3>Group Size</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(1)}
              checked={filters['capacity'] === 1}
              onChange={function() {}}
              />
              <label>Any Size</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(10)}
              checked={filters['capacity'] === 10}
              onChange={function() {}}
              />
              <label>10 or more</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(15)}
              checked={filters['capacity'] === 15}
              onChange={function() {}}
              />
              <label>15 or more</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(20)}
              checked={filters['capacity'] === 20}
              onChange={function() {}}
              />
              <label>20 or more</label>
          </li>
        </ul>

        <h3>Activities</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('biking')}
              checked={filters['biking'] === true}
              onChange={function() {}}
              />
              <label>Biking</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('hiking')}
              checked={filters['hiking'] === true}
              onChange={function() {}}
              />
              <label>Hiking</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('swimming')}
              checked={filters['swimming'] === true}
              onChange={function() {}}
              />
              <label>Swimming</label>
          </li>
        </ul>

        <h3>Terrain</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('beach')}
              checked={filters['beach'] === true}
              onChange={function() {}}
              />
              <label>Beach</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('forest')}
              checked={filters['forest'] === true}
              onChange={function() {}}
              />
              <label>Forest</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('mountain')}
              checked={filters['mountain'] === true}
              onChange={function() {}}
              />
              <label>Mountain</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('desert')}
              checked={filters['desert'] === true}
              onChange={function() {}}
              />
              <label>Desert</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;