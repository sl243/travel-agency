import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, profileUpdate } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName)
    const [photoURL, setPhotoURL] = useState(user?.photoURL)

    // const photoURLRef = useRef();
    // const nameChangeRef = useRef();

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)

    }

    const handlePhotoURLChange = event => {
        setPhotoURL(event.target.value)
    }

    const handleProfileUpdate = (event) => {
        event.preventDefault()
        handleProfileUdpate(name, photoURL)

    }


    // user profile update 
    const handleProfileUdpate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
            // phoneNumber: phone,
        }
        profileUpdate(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    return (
        <div className='mb-5'>
            <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto'>
                <h3 className='text-center'>Update Your Profile</h3>
                <Form onSubmit={handleProfileUpdate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={handleNameChange} defaultValue={name} name='name' type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control readOnly defaultValue={user?.email} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control onChange={handlePhotoURLChange} defaultValue={photoURL} name='photoURL' type="photoURL" placeholder="Enter Phot url" />
                    </Form.Group>
                    <Button

                        className='w-25 mx-auto'
                        variant="primary"
                        type="submit">
                        Update Profile
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Profile;