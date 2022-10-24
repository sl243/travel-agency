import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Booking = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg='5'>
                        <div className='mt-5'>
                            <h2>Cox's bazar</h2>
                            <p className='fs-4 text-justity'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach.</p>
                        </div>
                    </Col>
                    <Col lg='7'>
                        <div className='mt-5 border rounded shadow-lg p-5'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control type="text" placeholder="Your Origin" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="text" placeholder="Your Destination" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <div className='d-flex gap-5'>
                                        <div>
                                            <label for="start">From</label> <br></br>
                                            <input type="date" id="start" name="trip-start"
                                                value="2018-07-22"
                                                min="2018-01-01" max="2025-12-31"></input>
                                        </div>
                                        <div>
                                            <label for="start">To</label> <br></br>
                                            <input type="date" id="start" name="trip-start"
                                                value="2018-07-22"
                                                min="2018-01-01" max="2025-12-31"></input>
                                        </div>
                                    </div>
                                </Form.Group>

                                <Link to='/confirmbook'>
                                    <Button className='w-50 mx-auto' variant="primary" type="submit">
                                        Start Booking
                                    </Button>
                                </Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;