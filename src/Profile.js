import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container, Card } from "react-bootstrap";

class Profile extends React.Component{
  render() {
    const {isAuthenticated,user} = this.props.auth0;
    return(
      isAuthenticated && (
        <Container>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.picture} alt={user.name}/>
          <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
          {user.email}
        </Card.Text>
      </Card.Body>
    </Card>
        {/* <div className="profile">
          <img className="profile-img" src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div> */}
        </Container>
      )
    )
  }
}

export default withAuth0(Profile);