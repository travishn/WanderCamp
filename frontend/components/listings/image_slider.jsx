import React from 'react';
import Slider from 'react-slick';

class ImageSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    };

    const { photos } = this.props;
    
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
