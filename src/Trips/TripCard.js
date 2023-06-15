import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button } from 'react-bootstrap';
import './Trip.css';

class TripCard extends Component {
  render() {
    const { trip, deleteTrip } = this.props;
    return (
      <Card className="trip-card" style={{ width: '18rem', height: '46rem' }}>
        {/* TODO: Replace image of airbnb with map or something else */}
        <Card.Img variant="top" src={trip.airbnb ? trip.airbnb.images[0] : 'https://cdn.pixabay.com/photo/2017/04/05/01/13/trip-2203682_1280.jpg'} alt='airbnb image' />
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
              {/* Loads default image if no there's no other image */}
              <p>{trip.airbnb ? <a href={trip.airbnb.url} target='_blank' rel="noreferrer">{trip.airbnb.name}</a> : 'None chosen'}</p>
            </ListGroup.Item>
          </ListGroup>
          <div class="buttons mt-3">
            <Link to={`/trip/${trip._id}`}>
              <Button variant="primary">Edit trip</Button>
            </Link>{" "}
            <Button variant='danger' onClick={() => deleteTrip(trip)}>Delete trip</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default TripCard;
