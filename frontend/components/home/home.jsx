import React from 'react';
import SearchContainer from '../search/search_container';

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <div className="home-header">
          <div className="search-container">
            <h2>Find yourself outside.</h2>
            <p className="home-text">Search, discover and book over 285,000 campsites, 
              vineyards, ranches, public parks and experience wanderlust.</p>
            <SearchContainer />
          </div>

          <figure>
            <img className="home-picture"src="https://res.cloudinary.com/emanon/image/upload/v1528938749/dbpwvyn3mr8nidsplivk.jpg" />
          </figure>
        </div>


        <div className="home-categories">
        </div>
      </div>
    );

  }
}

export default Home;