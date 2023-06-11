import React from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";


// class Campsites extends React.Component {

//   render() {
//     const CampStr = this.props.campsiteArr.map((element, idx) =>
//       <Camping element={element}
//         key={idx}
//       />)
//     return (
//       <>
//         <div className="campsites">
//           <Card>
//             <Card.Body>
//               <Card.Title>Site Name: {this.props.element.site}</Card.Title>
//               <Card.Text>Fee: {this.props.element.fee} </Card.Text>
//               <Card.Text>description: {this.props.element.description}</Card.Text>
//             </Card.Body>

//           </Card>
//         </div>
//         {CampStr}
//       </>
//     )
//   }
// }

class Camping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campingData: [],
      query: '',
      error: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getCampsites()

  }

  getCampsites = () => {
    let requestURL = `${process.env.REACT_APP_SERVER}/camping?query=${this.state.query}&limit=10&activity=6,CAMPING`;
    axios.get(requestURL)
      .then(response => {
        this.setState({ campingData: response.data }, () => console.log('campingData', this.state.campingData));
        this.setState({ error: '' });
      })
      .catch(err => this.setState({ error: 'could not find campsites :(' }));
  }


  render() {
    // console.log(this.props.element)
    return (
      <>
        <div className="camping">
        <Card>
        <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter location name" onChange={(e)=> this.setState({query:e.target.value})} required />
                  <Button type="submit">Find Camping</Button>
                </Form.Group>
              </Form>
         </Card.Body>
        </Card>
        </div>
      </>
    )
  }
}


export default Camping;
