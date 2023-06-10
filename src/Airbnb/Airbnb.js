import React from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import './Airbnb.css';

class Airbnb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airbnbData: [],
      error: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevents instant refresh
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log('formObj:', formObj); // delete later
    this.getAirbnbs(formObj);
  }

  getAirbnbs = (form) => {
    let requestURL = `${process.env.REACT_APP_SERVER}/airbnb?location=${form.location}&checkin=${form.checkin}&checkout=${form.checkout}&adults=${form.adults}&children=${form.children}&pets=${form.pets}&page=1`;
    console.log(requestURL);
    axios.get(requestURL)
      .then(response => {
        console.log(response);
        this.setState({ airbnbData: response.data }, () => console.log('airbnbData:', this.state.airbnbData));
        this.setState({ error: '' });
      })
      .catch(err => this.setState({ error: 'could not fetch airbnbs' }));
  }

  render() {
    return (
      <div className="airbnb">
        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              {/* Might delete this location formgroup */}
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location name" name='location' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Check in date</Form.Label>
                <Form.Control type="date" placeholder="2023-01-01" name='checkin' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Check out date</Form.Label>
                <Form.Control type="date" placeholder="2023-01-02" name='checkout' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of adults</Form.Label>
                <Form.Control type="text" defaultValue="1" name='adults' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of children</Form.Label>
                <Form.Control type="text" defaultValue="0" name='children' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of pets</Form.Label>
                <Form.Control type="text" defaultValue="0" name='pets' required />
              </Form.Group>
              <Button variant="primary" type="submit">Find Airbnbs</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Airbnb;