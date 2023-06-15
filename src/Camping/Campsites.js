import React from "react";
import { Row, Col, Accordion, Button } from "react-bootstrap";


class Campsites extends React.Component {

  render() {
    
    return (
      <>
      <Row>

        <Accordion className="camp">
       {this.props.campingData.map((element, idx) => 
            <Col>
            <div key={idx} className="campsites">
                <Accordion.Item eventKey="{idx}">
                  <Accordion.Header className="camp-header">{element.site}</Accordion.Header>
                  <Accordion.Body className="acc">
                    <img src={element.image} alt="campsite"/>
                    {element.fee}
                    {element.description}
                    <Button variant="primary" onClick={() => this.props.editCamping(element)}>Select</Button>

                  </Accordion.Body>
                </Accordion.Item>
      
            </div>
            </Col>
      )
    }
    </Accordion>
      </Row>      
        </>
      )
    }
  }
  

export default Campsites;
