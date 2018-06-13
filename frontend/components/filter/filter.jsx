import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // allows for re-rendering upon local state change
  }


  render() {
    const { filters } = this.props;
    
    return (
      <div className="filters-container">
        <h2>Search Filters</h2>
        

        <h3>Camping Type</h3>
        <ul>
          <li className='filters-list-item'>
            <label>Camping</label>
            <input 
              className='checkbox'
              type='radio'
              onClick={this.handleListingFilter('public')}
              checked={filters['camping'] === true}
            />
          </li>
        </ul>

        <h3>Pricing</h3>
        <ul>
        </ul>

        <h3>Group Size</h3>
        <ul>
        </ul>

        <h3>Activities</h3>
        <ul>
        </ul>

        <h3>Terrain</h3>
        <ul>
        </ul>

      </div>
    );
  }
}

export default Filter;