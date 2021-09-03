import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLaptop, faList, faPlayCircle, faRandom, faRedoAlt, faStepBackward, faStepForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const MyFooter = () => {
  return (
    <Container fluid className="mediaPlayerFooter">
    <Row className="text-white">
      <Col md={2} className="leftFooter d-none d-sm-none d-md-flex">
          <div className="currentlyPlayed">
            <img
              onclick="displayfull()"
              src="https://i.pinimg.com/originals/f2/fd/1a/f2fd1a3d428b6a0b1389e66c98451f44.jpg"
              className="img-fluid"
              id="aviciiSize"
            />
          </div>
          <div className="currentPlayedSongInfo ml-2 mt-3">
            <p className="card-text my-0">Wake Me Up</p>
            <p className="card-text my-0">
              <small className="text-muted">Avicii</small>
            </p>
          </div>
          <div id="heart">
            <Button id="footerButton">
            <FontAwesomeIcon icon={faHeart} />
            </Button>
          </div>
        </Col>

        <Col md={8} className="middleFooter mt-2">
          <div className="col-12 mt-2">
            <div id="shuffle">
              <button id="footerButton">
              <FontAwesomeIcon icon={faRandom} style={({color: "white"})}/>
              </button>
            </div>

            <div id="backward">
              <button id="footerButton">
              <FontAwesomeIcon icon={faStepBackward} style={({color: "white"})}/>
              </button>
            </div>

            <div id="play">
              <button id="footerButton">
              <FontAwesomeIcon icon={faPlayCircle} style={({color: "white"})}/>
              </button>
            </div>

            <div id="forward">
              <button id="footerButton">
              <FontAwesomeIcon icon={faStepForward} style={({color: "white"})}/>
              </button>
            </div>

            <div id="repeat">
              <button id="footerButton">
              <FontAwesomeIcon icon={faRedoAlt} style={({color: "white"})}/>
              </button>
            </div>
          </div>
          <div className="col-12">
            <p id="minute1" className="mx-2 my-2">1:32</p>
            <progress
              className="mx-2 my-2"
              id="file"
              max="190"
              value="80"
              fill="white"
            ></progress>
            <p id="minute2" className="mx-2 my-2">2:34</p>
          </div>
          </Col>

          <Col md={2}>

          <div className="rightFooter mt-4 d-none d-sm-none d-md-flex">
          <div id="queue">
            <button id="footerButton">
            <FontAwesomeIcon icon={faList} style={({color: "white"})}/>
            </button>
          </div>

          <div id="device">
            <button id="footerButton">
            <FontAwesomeIcon icon={faLaptop} style={({color: "white"})}/>
            </button>
          </div>

          <div id="volume" className="mr-1">
            <button id="footerButton">
            <FontAwesomeIcon icon={faVolumeUp} style={({color: "white"})}/>
            </button>
          </div>

          <progress
            id="volumeProgress"
            max="90"
            value="50"
            fill="white"
          ></progress>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default MyFooter;