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
            <img src="http://res.cloudinary.com/emanon/image/upload/c_scale,h_540,w_712/v1528489573/photo-1484960055659-a39d25adcb3c.jpg" />
          </figure>
        </div>


        <div className="home-categories">
        </div>
      </div>
    );

  }
}

export default Home;