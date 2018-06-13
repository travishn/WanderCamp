import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <div className="home-header">
          <div>
            {/* <h2>Find yourself outside.</h2> */}
            <h2>Experience wanderlust.</h2>
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