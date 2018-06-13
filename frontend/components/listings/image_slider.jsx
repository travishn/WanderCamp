import React from 'react';
import Slider from 'react-slick';

class ImageSlider extends React.Component {
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true,
    };

    const { photos } = this.props;
    
    return (
      <section className="listing-photos">
        <Slider {...settings}>
          {
            photos.map(photo => {
              return (
                <div key={photo.id}>
                  <img src={photo.img_url} />
                </div>
              );
            })
          }
        </Slider>
      </section>
    );
  }
}

export default ImageSlider;
