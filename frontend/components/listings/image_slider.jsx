import React from 'react';
import Slider from 'react-slick';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photos } = this.props;
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true
    }

    return (
      <section className="slider-container">
        <Slider {...settings}>
          {photos.map(photo =>
            <div key={photo.id}>
              <img src={photo.img_url} />
            </div>
          )}
        </Slider>
      </section>
    )
  }
}

export default ImageSlider;
