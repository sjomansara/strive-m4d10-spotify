import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMicrophoneAlt, faPlusSquare, faSearch, faStream } from '@fortawesome/free-solid-svg-icons'

const Side = props => {
   

    return (
        <>
            <Nav className="pl-3 col-md-2 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <img
                alt=""
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                width="150"
                height="auto"
                className="d-inline-block align-top mt-3 mb-3"
            />
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link id="navText" href="/home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="link-1"><FontAwesomeIcon icon={faMicrophoneAlt} /> Artist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="link-2"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><FontAwesomeIcon icon={faStream} /> Your Library</Nav.Link>
            </Nav.Item>
            <br/>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><FontAwesomeIcon icon={faPlusSquare} /> Create Playlist</Nav.Link>
            </Nav.Item>
            </Nav>
        </>
        );
  };
  const MyNav = withRouter(Side);
  export default MyNav