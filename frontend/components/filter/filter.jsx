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
            <label>Camping</label>
            <input 
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('camping')}
              checked={filters['camping'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Glamping</label>
            <input 
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('glamping')}
              checked={filters['glamping'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Pet Friendly</label>
            <input 
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('petFriendly')}
              checked={filters['petFriendly'] === true}
            />
          </li>
        </ul>

        <h3>Pricing</h3>
        <ul>
          <li className='filter-item'>
            <label>Any Price</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.togglePriceFilter(12241993)}
              checked={filters['price'] === 12241993}
            />
          </li>
          <li className='filter-item'>
            <label>Under $25</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.togglePriceFilter(25)}
              checked={filters['price'] === 25}
            />
          </li>
          <li className='filter-item'>
            <label>Under $50</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.togglePriceFilter(50)}
              checked={filters['price'] === 50}
            />
          </li>
          <li className='filter-item'>
            <label>Under $75</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.togglePriceFilter(75)}
              checked={filters['price'] === 75}
            />
          </li>
        </ul>

        <h3>Group Size</h3>
        <ul>
          <li className='filter-item'>
            <label>Any Size</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleCapacityFilter(50)}
              checked={filters['capacity'] === 50}
            />
          </li>
          <li className='filter-item'>
            <label>10 or more</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleCapacityFilter(10)}
              checked={filters['capacity'] === 10}
            />
          </li>
          <li className='filter-item'>
            <label>15 or more</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleCapacityFilter(15)}
              checked={filters['capacity'] === 15}
            />
          </li>
          <li className='filter-item'>
            <label>20 or more</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleCapacityFilter(20)}
              checked={filters['capacity'] === 20}
            />
          </li>
        </ul>

        <h3>Activities</h3>
        <ul>
          <li className='filter-item'>
            <label>Biking</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('biking')}
              checked={filters['biking'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Hiking</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('hiking')}
              checked={filters['hiking'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Swimming</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('swimming')}
              checked={filters['swimming'] === true}
            />
          </li>
        </ul>

        <h3>Terrain</h3>
        <ul>
          <li className='filter-item'>
            <label>Beach</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('beach')}
              checked={filters['beach'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Forest</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('forest')}
              checked={filters['forest'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Mountain</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('mountain')}
              checked={filters['mountain'] === true}
            />
          </li>
          <li className='filter-item'>
            <label>Desert</label>
            <input
              className='checkbox'
              type='radio'
              onClick={this.toggleBoolean('desert')}
              checked={filters['desert'] === true}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;