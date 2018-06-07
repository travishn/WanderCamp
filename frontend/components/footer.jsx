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
          <div className="links-header">
            <h5>Link Header</h5>
            <h5>Another Link</h5>
          </div>

          <div className="links">
            <p>Link to somewhere</p>
            <p>Another link to somewhere</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-main">
        <div className="footer-bottom">
          <p className="made-in">Made at App Academy</p>

          <div className="copyright">
            <a href="/">Terms of Service</a>
            <p> * </p>
            <a href="/">Privacy Policy</a>
            <p> * </p>
            <a href="/"> &#169; 2018 Wandercamp</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

