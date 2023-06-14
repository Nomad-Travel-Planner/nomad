import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";


class Campsites extends React.Component {

  render() {
    
    return (
      <>
      <Row>

       {this.props.campingData.map((element, idx) => 
            <Col>
            <div key={idx} className="campsites">
        
              {/* <Card className="camp">
                <Card.Body>
                  <Card.Title>Site Name: {element.site}</Card.Title>
                  <Card.Text>Fee: {element.fee} </Card.Text>
                  <Card.Text>description: {element.description}</Card.Text>
                </Card.Body>
              </Card> */}
              <Accordion className="camp">
                <Accordion.Item eventKey="{idx}">
                  <Accordion.Header className="camp-header">{element.site}</Accordion.Header>
                  <Accordion.Body>
                    {element.fee}
                    {element.description}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
      
            </div>
            </Col>
      )
       }
      </Row>
        
          {/* {CampStr ?
            CampStr :
            null}  */}
         
      
        </>
      )
    }
  }
  

export default Campsites;
