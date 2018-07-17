import React from 'react';
import SearchContainer from '../search/search_container';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCategoryListings();
  }

  handleCategory(field) {
    return (e) => {
      this.props.receiveFilter(field);
      this.props.history.push('/discover');
    };
  }

  handleGroup(capacity) {
    return (e) => this.props.receiveGroupFilter(20)
      .then( () => this.props.history.push('/discover'));
  }



  render() {
    const { listings } = this.props;
    if (listings.length <= 1) return null;

    return (
      <div className="home-container">
        <div className="home-header">
          <div className="home-left">
            <div className="search-container">
              <h2>Find yourself outside.</h2>
              <p className="home-text">Search, discover and book unique experiences
              around the world and cure your wanderlust.</p>
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
            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/emanon/image/upload/v1529029915/forest_building-31644.jpg" onClick={this.handleCategory('glamping')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('glamping')} className="home-category-title">Glamping</p>
                <p className="options-near-me">Best options near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/emanon/image/upload/v1529031267/photo-1503088414719-16a89b27b122.jpg" onClick={this.handleCategory('beach')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('beach')}>Beach camping</p>
                <p className="options-near-me">Best options near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/emanon/image/upload/v1529027571/samuel-thompson-501755-unsplash.jpg" onClick={this.handleCategory('petFriendly')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('petFriendly')}>Pet friendly camping</p>
                <p className="options-near-me">Best options near me</p>
              </div>
            </div>

            <Link className="home-category" to={`/listings/${listings[0].id}`}>
              <img className="category-image"src={listings[0].photos[0]["img_url"]}></img>

              <div className="home-text-container">
                <p className="home-category-title">Crystal Cove</p>
                <p className="options-near-me">California</p>
              </div>
            </Link>

            <Link className="home-category"to={`/listings/${listings[1].id}`}>
              <img className="category-image" src={listings[1].photos[1]["img_url"]}></img>

              <div className="home-text-container">
                <p className="home-category-title">Wild Tipi</p>
                <p className="options-near-me">California</p>
              </div>
            </Link>

          <Link className="home-category"to={`/listings/${listings[2].id}`}>
            <img className="category-image"src={listings[2].photos[0]["img_url"]}></img>

              <div className="home-text-container">
                <p className="home-category-title">Mountain Casita</p>
                <p className="options-near-me">California</p>
              </div>
          </Link>

          </div>
        </div>
          <div className='grid-row'>
            <Link className="home-category"to={`/listings/${listings[4].id}`}>
              <img className="category-image"src={listings[4].photos[0]["img_url"]}></img>

                <div className="home-text-container">
                  <p className="home-category-title">Above the Clouds</p>
                  <p className="options-near-me">California</p>
                </div>
            </Link>
            
            <Link className="home-category"to={`/listings/${listings[5].id}`}>
              <img className="category-image"src={listings[5].photos[1]["img_url"]}></img>

                <div className="home-text-container">
                  <p className="home-category-title">Canvas Safari</p>
                  <p className="options-near-me">California</p>
                </div>
            </Link>

            <Link className="home-category" to={`/listings/${listings[3].id}`}>
              <img className="category-image" src={listings[3].photos[0]["img_url"]}></img>

              <div className="home-text-container">
                <p className="home-category-title">Winter Paradise</p>
                <p className="options-near-me">California</p>
              </div>
            </Link>
          </div>
      </div>

      <Footer />
    </div>
    );
  }
}

export default Home;