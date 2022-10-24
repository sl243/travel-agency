import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, user, setLoading } = useContext(AuthContext);
    const navigate = useNavigate()

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignInSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

                if (user?.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your Email is not Verity. Please Verify Your Email Address')
                }
            })
            .catch(error => console.error(error))
            .finallay( () => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }

        // if(user?.emailVerified){
        //     navigate(from, {replace: true})
        // }
        // else {
        //     toast.error('Your Email is not Verity. Please Verify Your Email Address')
        // }

    }, [user, navigate, from])


    return (
        <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto'>
            <h3>Login Your Account</h3>
            <Form onSubmit={handleSignInSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Button className='w-25 mx-auto' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-2'>Don't have an account?
                    <Link to='/register'> Create an account</Link>
                </p>
            </Form>
        </div>
    );
};

export default Login;