import Head from "next/head";
import React from "react";

import LeftSidebar from "../components/common/left_sidebar";
import RightSidebar from "../components/common/right_sidebar";
import MainSection from "../components/index/main_section";

//imported bootstrap components
import { Container, Row, Col } from "react-bootstrap";

//styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#393C49", color: "white" }}>
      <Container fluid={true} className="d-flex ">
        <Row>
          <Col xs="12" md="1">
            <div
              style={{
                position: "fixed",
              }}
            >
              <LeftSidebar />
            </div>
          </Col>
          <Col
            xs="12"
            md="8"
            style={{
              padding: "0px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <div style={{ float: "right" }}>
              <br></br>
              <MainSection />
            </div>
          </Col>
          <Col
            xs="12"
            md="3"
            style={{
              backgroundColor: "#1f1d2b",
              height: "100vh",
              position: "fixed",
              overflowY: "hidden",
              right: 0,
            }}
          >
            <br></br>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
