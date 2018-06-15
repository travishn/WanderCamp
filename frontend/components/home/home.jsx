import React from 'react';
import SearchContainer from '../search/search_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
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
          <h2>Discover now...</h2>

          <ul className="category-grid">
            <li className="home-category">
              <img src="" onClick={this.handleGroup(20)}></img>
            </li>

            <li className="home-category">
              <img src="" onClick={this.handleCategory('glamping')}></img>
            </li>

            <li className="home-category">
              <img src="" onClick={this.handleCategory('petFriendly')}></img>
            </li>

            <li className="home-category">
              <img src=""></img>
            </li>

            <li className="home-category">
              <img src=""></img>
            </li>

            <li className="home-category">
              <img src=""></img>
            </li>

            <li className="home-category">
              <img src=""></img>
            </li>

            <li className="home-category">
              <img src=""></img>
            </li>

            <li className="home-category">
              <img src=""></img>
            </li>
          </ul>
        </div>
      </div>
    );

  }
}

export default Home;