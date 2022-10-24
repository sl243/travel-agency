import React from 'react';
import { Image } from 'react-bootstrap';

const GoogleMap = () => {
    return (
        <div>
            <h1 className='text-center'>Google Maps</h1>
            <Image 
                className='container'
                src='https://www.androidauthority.com/wp-content/uploads/2022/02/rotate-google-maps-with-finger-placement-demonstration-screenshot.jpg'
            ></Image>
        </div>
    );
};

export default GoogleMap;