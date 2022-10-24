import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const { userRegister, googleSinIn, githubSignIN, facebookSignIn, emailVerification } = useContext(AuthContext);
    const [accepted, setAccepted] = useState();
    const [error, setError] = useState();

    const handleRegisterSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const phone = form.phone.value;

        console.log(phone)

        userRegister(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                handleEmailVerification();
                toast.success('Please Verify Your Email Address')
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    // google sign in
    const handleGoogleSignIn = () => {
        googleSinIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    // Gitgub Sign In
    const handleGithubSignIn = () => {
        githubSignIN()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }


    // Facebook Sign In
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    // User Email Verification
    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // Terms and condition accepted button diasabel
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='mb-5'>
            <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto'>
                <h3>Create an Account</h3>
                
                <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Your Name" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control name='phone' type="text" placeholder="Enter Your Contact Number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photoURL' type="photoURL" placeholder="Enter Phot url" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger" controlId="formBasicPassword">
                       {error}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            label={<>Accept <Link to='/terms'>Terms and Condition</Link> </>} />
                    </Form.Group>

                    <Button
                        disabled={!accepted}
                        className='w-25 mx-auto'
                        variant="primary"
                        type="submit">
                        Create an Account
                    </Button>

                    <p className='mt-2'>Already have an account?
                        <Link to='/login'> Login</Link>
                    </p>
                </Form>
                <div className='w-50 mx-auto'>
                    <p>----------------------- Or -----------------------</p>
                    <Button
                        onClick={handleGoogleSignIn}
                        className='w-100 mx-auto d-block mb-2'
                        variant="outline-primary">
                        <FaGoogle></FaGoogle> Continue with Google
                    </Button>
                    <Button
                        onClick={handleGithubSignIn}
                        className='w-100 mx-auto d-block mb-2'
                        variant="outline-primary">
                        <FaGithub></FaGithub> Continue with Github
                    </Button>
                    <Button
                        onClick={handleFacebookSignIn}
                        className='w-100 mx-auto d-block'
                        variant="outline-primary">
                        <FaFacebook></FaFacebook> Continue with Facebook
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;