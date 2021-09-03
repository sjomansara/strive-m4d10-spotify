import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faMicrophoneAlt, faPlusSquare, faSearch, faStream } from '@fortawesome/free-solid-svg-icons'

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
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><FontAwesomeIcon icon={faHeart} /> Liked Songs</Nav.Link>
            </Nav.Item>
            <br/>
            <div id="tertiaryMenu">
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Dinner With Friends</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Your Top Songs 2020</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Madonna</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Britney Spears</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Summer Hits</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is ABBA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Discover Weekly</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Release Radar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Daily Mix 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Time Capsule</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Daily Mix 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Daily Mix 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Harry Styles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Queen</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Fleetwood Mac</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Soultronic</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">00s Party</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Soulful Day</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Oyster</Nav.Link>
            </Nav.Item>
            </div>
            </Nav>
        </>
        );
  };
  const MyNav = withRouter(Side);
  export default MyNav