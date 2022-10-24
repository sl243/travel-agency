import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SlideShow = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: '400px' }}
                    className="d-block w-100"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/18/55/65/87/caption.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '400px' }}
                    className="d-block w-100"
                    src="https://tourtravelbd.com/wp-content/uploads/2015/04/Tea-Garden-Srimongol.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '400px' }}
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
};

export default SlideShow;