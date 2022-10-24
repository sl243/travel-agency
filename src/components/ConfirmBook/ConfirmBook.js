import React, { useEffect, useState } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Rooms from './Rooms';

const ConfirmBook = () => {
    const [hotelRoom, setHotelRoom] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/hotel')
        .then(res => res.json())
        .then(data => setHotelRoom(data))
    },[])
    
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='text-center'>Hotel Room</h1>
                    {
                        hotelRoom.map(room => <Rooms
                            key={room.id}
                            room={room}
                        ></Rooms>)
                    }
                </div>
                <div className='col-6'>
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBook;