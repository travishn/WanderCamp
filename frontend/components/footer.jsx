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
          <h5>Link Header</h5>
          <p>Link to Somewhere</p>
        </div>
      </div>


      <div className="footer-bottom">
        <p className="made-in">Made at App Academy</p>

        <div className="copyright">
          <a href="/">Terms of Service</a>
          " * "
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};
export default Footer;

