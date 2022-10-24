import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Rooms = ({ room }) => {
    const { id, title, url, thumbnailUrl } = room;
    console.log(room)
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Rooms;