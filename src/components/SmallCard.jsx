import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default class SmallCard extends Component {

    render() {
        return (
          <Col sm={6} md={4} lg={3}>
            <Card className="card rounded border-0 text-white bg-dark mb-2" id="smallCard">
            <Row className="no-gutters">
                <Col md={2}>
                    <Card.Img className="rounded-left" id="cardImg" variant="top" src="https://upload.wikimedia.org/wikipedia/en/2/27/ABBA_-_The_Album_%28Polar%29.jpg" />
                </Col>
            </Row>
            <Col md={10}>
                 <div className="card-body">
                   <h5 id="fontSize" class="card-title ml-3">Liked Songs</h5>
                   <h6 class="card-title ml-3"><FontAwesomeIcon icon={faPlayCircle} id="playHover"/></h6>
                 </div>
            </Col>
            </Card>
          </Col>
        );
      }

}

        // <div class="col-sm-6 col-md-4 col-lg-3">
        //   <div class="card rounded border-0 text-white bg-dark mb-2" id="cardHover" onmouseover="mouseOver('linear-gradient(180deg, rgb(4, 83, 14) 0%, rgb(0, 0, 0) 35%)')" onmouseout="mouseOut()">
        //     <div class="row no-gutters">
        //       <div class="col-md-2">
        //         <img onclick="location.href='album.html'" id="imageSize" src="https://misc.scdn.co/liked-songs/liked-songs-300.png" class="rounded-left" alt="...">
        //       </div>
        //       <div class="col-md-10">
        //         <div class="card-body bodyHover">
        //           <h5 id="fontSize" class="card-title ml-3">Liked Songs</h5>
        //           <h6 class="card-title ml-3"><i class="fas fa-play-circle playHover"></i></h6>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>