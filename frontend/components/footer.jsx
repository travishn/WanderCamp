import React from 'react';

const Footer = () => {
  return (
    <section className="footer-main">

      <div className="footer-container">
        <div className="footer-description">
          <h5>Wandercamp is everywhere you want to camp.</h5>
          <p>Discover unique experiences on ranches, nature 
            preserves, farms, vineyards, and public campgrounds 
            across the U.S. Book tent camping, treehouses, cabins, 
            yurts, primitive backcountry sites, car camping, airstreams, 
            tiny houses, RV camping, glamping tents and more.</p>
        </div>

        <div className="footer-link-container">
          <div className="footer-browse">
            <h5>Browse</h5>
            <ul className="list-unstyled">
              <li><a href="/">Host campers</a></li>
              <li><a href="/">Discover Camps</a></li>
              <li><a href="/">Gift Cards</a></li>
              <li><a href="/">Help</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="footer-about">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="/">Journal</a></li>
              <li><a href="/">Our Story</a></li>
              <li><a href="/">The Team</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Press Kit</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Pintrest</a></li>
              <li><a href="/">Spotify</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-main">
        <div className="footer-bottom">
          <p className="made-at">Made at App Academy</p>

          <div className="copyright">
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/"> &#169; 2018 Wandercamp</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

