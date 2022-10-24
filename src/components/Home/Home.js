import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SlideShow from '../SlideShow/SlideShow';

const Home = () => {
    return (
        <div className='mb-5'>
            <SlideShow></SlideShow>
            <Container className='mt-5'>
                <Row>
                    <Col lg='4'>
                        <div className='mt-5'>
                            <h2>Cox's bazar</h2>
                            <p className='fs-4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        </div>
                        <Link to='/booking'><Button variant="primary">Booking <FaArrowRight></FaArrowRight> </Button></Link>
                    </Col>
                    <Col lg='8'>
                        <div className='mt-5 d-flex gap-4'>
                            <Card style={{ width: '18rem', height: '500px' }}>
                                <Card.Img style={{ height: '450px' }} variant="top" src='https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg' />
                                <Card.Body>
                                    <Card.Title>Cox's  Bazar</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', height: '500px' }}>
                                <Card.Img style={{ height: '450px' }} variant="top" src='https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg' />
                                <Card.Body>
                                    <Card.Title>Sreemangal</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', height: '500px' }}>
                                <Card.Img style={{ height: '450px' }} variant="top" src='https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg' />
                                <Card.Body>
                                    <Card.Title>Sundarbans</Card.Title>
                                </Card.Body>
                            </Card>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;