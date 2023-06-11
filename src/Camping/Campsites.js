import React from "react";
import { Card } from "react-bootstrap";


class Campsites extends React.Component {

  render() {
    const CampStr = this.props.campsiteArr.map((element, idx) =>
      <Camping element={element}
        key={idx}
      />)
    return (
      <>
        <div className="campsites">
          <Card>
            <Card.Body>
              <Card.Title>Site Name: {this.props.element.site}</Card.Title>
              <Card.Text>Fee: {this.props.element.fee} </Card.Text>
              <Card.Text>description: {this.props.element.description}</Card.Text>
            </Card.Body>

          </Card>
        </div>
        {CampStr}
      </>
    )
  }
}

export default Campsites;