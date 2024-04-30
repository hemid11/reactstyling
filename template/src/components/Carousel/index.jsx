import React from 'react';

const Carousel = () => {
  return (
    <section className='carousel'>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Carousel Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1</h5>
            <p>Slide 1 Description</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Carousel Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 2</h5>
            <p>Slide 2 Description</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Carousel Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 3</h5>
            <p>Slide 3 Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
