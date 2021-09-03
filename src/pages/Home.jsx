import React from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { Col } from "react-bootstrap";
import GoodMorning from "../components/GoodMorning";

const Home = () => {
  return (
    <Col md={10}>
        <GoodMorning />
        <RecentlyPlayed />
    </Col>
  );
}

export default Home;