import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>Travel</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/news'>News</Link></Nav.Link>
                        <Nav.Link><Link to='/destination'>Destination</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        {user?.uid ?
                            <>
                                <Button className='me-2' variant="outline-light">{user?.displayName}</Button>
                                <Link to='/profile'>
                                    {
                                        user?.photoURL ?
                                            <Image
                                                src={user?.photoURL}
                                                style={{ height: '40px' }}
                                                roundedCircle
                                            ></Image>
                                            :
                                            <FaUser></FaUser>
                                    }
                                </Link>
                                <Button onClick={handleSignOut} className='me-2 ms-2' variant="outline-light">Logout</Button>
                            </>
                            :
                            <>
                                <Link to='/login'><Button className='me-2' variant="outline-success">Login</Button></Link>
                                <Link to='/register'><Button variant="outline-success">Register</Button></Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;