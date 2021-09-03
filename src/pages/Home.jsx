import React from "react";
import SmallCard from "../components/SmallCard";
import { Col } from "react-bootstrap";
import GoodMorning from "../components/GoodMorning";

const Home = () => {
  return (
    <Col md={10}>
        <GoodMorning />
    </Col>
  );
}

export default Home;