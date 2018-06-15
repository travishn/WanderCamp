import React from 'react';
import Slider from 'react-slick';

class ImageSlider extends React.Component {
  render() {
    const { photos } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    };
    
    return (
      <section className="listing-photos">
        <Slider {...settings}>
          {photos.map(photo => 
            <div key={photo.id}>
              <img src={photo.img_url} />
            </div>
          )}
        </Slider>
      </section>
    );
  }
}

export default ImageSlider;
