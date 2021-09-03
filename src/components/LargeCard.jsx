import React, { Component } from "react"
import { Col, Card } from "react-bootstrap";

export default class LargeCard extends Component {

    render() {
        return (
            <Col sm={6} md={3} lg={2}>
            <Card className="bg-dark border-dark mt-3" id="largeCard">
            <Card.Img variant="top" className="p-2" src={this.props.image} />
            <Card.Body>
              <Card.Text>{this.props.title}</Card.Text>
              <Card.Text id="largeFontSize2">{this.props.artist}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        );
      }

}
