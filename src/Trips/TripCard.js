import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button } from 'react-bootstrap';

class TripCard extends Component {
  render() {
    const { trip } = this.props;
    return (
      <Card style={{ width: '18rem' }}>
        {/* TODO: Replace image of airbnb with map or something else */}
        <Card.Img variant="top" src={trip.airbnb.images[0]} alt='airbnb image' />
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <span>Location:</span>
              <p>{trip.location}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Campsite:</span>
              <p>Campsite stuff</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Airbnb:</span>
              <p>{trip.airbnb.name}</p>
            </ListGroup.Item>
          </ListGroup>
          <Link to={`/trip/${trip._id}`}>
            <Button variant="primary">Edit trip</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default TripCard;
