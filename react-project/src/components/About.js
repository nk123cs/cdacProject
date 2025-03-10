import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card.css";
class About extends Component {
  render() {
    return (
      <>
        <div class="bg-image1">
          <Container>
            <Row>
              <Col sm><div class="text-header">
                  <Card style={{ width: "12rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Our Founders</Card.Title>
                      <Card.Text>
                        All of them passed out from Cdac Bangalore batch of 2022.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div></Col>
                
              <Col sm>
                {" "}
                <div class="text-header">
                  <Card style={{ width: "12rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Manish Kumar Singh</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm>
                {" "}
                <div class="text-header">
                  <Card style={{ width: "12rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Neeraj Kumar Yadav</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm>
                {" "}
                <div class="text-header">
                  <Card style={{ width: "12rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Jadhav Pratik Laxman</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm>
                <div class="text-header">
                  <Card style={{ width: "12rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Hrushikesh Anil</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm> <div class="text-header">
            <Card style={{ width: "12rem", color: "black" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title c>Monil Mishra</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div></Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default About;
