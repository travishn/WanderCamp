import React from 'react';
import SearchContainer from '../search/search_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCategoryListings();
  }

  handleCategory(field) {
    return (e) => this.props.receiveFilter(field)
      .then( () => this.props.history.push('/discover'));
  }

  handleGroup(capacity) {
    return (e) => this.props.receiveGroupFilter(20)
      .then( () => this.props.history.push('/discover'));
  }



  render() {
    const { listings } = this.props;
    if (listings.length === 0) return null;

    return (
      <div className="home-container">
        <div className="home-header">
          <div className="home-left">
            <div className="search-container">
              <h2>Find yourself outside.</h2>
              <p className="home-text">Search, discover and book over 285,000 campsites, 
                vineyards, ranches, public parks and experience wanderlust.</p>
              <SearchContainer />

              <div className="sub-search">
                <Link className="or-text" to="/discover">Not sure where to look? Discover some camps!</Link>

                <span>&#8594;</span>
              </div>
            </div>
          </div>

          <figure>
            <img className="home-picture"src="https://res.cloudinary.com/emanon/image/upload/v1528938749/dbpwvyn3mr8nidsplivk.jpg" />
          </figure>
        </div>


        <div className="home-categories">
          <h2 className="discover-camping">Discover camping...</h2>
          
          <div className="category-wrapper">
          <div className="category-grid">
            <img className="home-category" src="https://res.cloudinary.com/emanon/image/upload/v1529029915/forest_building-31644.jpg" onClick={this.handleCategory('glamping')}></img>
            <img className="home-category" src="https://res.cloudinary.com/emanon/image/upload/v1529031267/photo-1503088414719-16a89b27b122.jpg" onClick={this.handleCategory('beach')}></img>
            <img className="home-category" src="https://res.cloudinary.com/emanon/image/upload/v1529027571/samuel-thompson-501755-unsplash.jpg" onClick={this.handleCategory('petFriendly')}></img>

            <Link className="home-category" to={`/listings/${listings[0].id}`}>
              <img className="category-image"src={listings[0].photos[0]["img_url"]}></img>
              <h3></h3>
            </Link>
            <Link className="home-category"to={`/listings/${listings[1].id}`}>
              <img className="category-image"src={listings[1].photos[0]["img_url"]}></img>
            </Link>
            
            <Link className="home-category"to={`/listings/${listings[2].id}`}>
              <img className="category-image"src={listings[2].photos[0]["img_url"]}></img>
            </Link>
            
            <img src=""></img>
            
            <img src=""></img>
            
            <img src=""></img>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;