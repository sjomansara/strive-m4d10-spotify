import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap";

export default class SmallCard extends Component {

    render() {
        return (
          <Col sm={6} md={4} lg={3}>
            <Card className="rounded border-0 text-white bg-dark mt-3" id="smallCard">
            <Row className="no-gutters">
                <Col md={2}>
                    <Card.Img className="rounded-left" id="cardImg" variant="top" src={this.props.image} />
                </Col>
            </Row>
            <Col md={10}>
                 <div className="card-body">
                   <h5 id="smallFontSize" class="card-title ml-3">{this.props.title}</h5>
                 </div>
            </Col>
            </Card>
          </Col>
        );
      }

}