import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Row, Col, Alert } from 'react-bootstrap';
import TripCard from './TripCard';

class DisplayTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      error: ''
    }
  }

  // Fetches all the user's saved trips from the database and stores them in state
  getTrips = async () => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      const trips =  await axios(`${process.env.REACT_APP_SERVER}/travel-routes`);
      // console.log('trips', trips);
      this.setState({trips: trips.data, error: ''});
    } catch (err) {
      this.setState({error: 'Could not load saved trips'});
    }
  }

  componentDidMount() {
    this.getTrips();
  }

  render() {
    return (
      <div>
        {this.state.error && <Alert variant='warning'>{this.state.error}</Alert>}
        <Row>
          {this.state.trips.length > 0 && this.state.trips.map(trip => (
            <Col key={trip._id}>
              <TripCard trip={trip}/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default withAuth0(DisplayTrips);
