import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import hands from "../images/hands.png";
import { useState } from "react";

const understandingSurrogacy = ["vSCiyI-6Ru0", "RYeTECmjKtg", "auHdEjXpXtE"];

const medicalProcedures = ["auHdEjXpXtE", "stfyXb9wzHY", "rSsinwxwDCo"];

const choosingtheRightSurrogate = ["RQ6DKyq7sQg", "Ytx7sGZE064", "-jfZ1lUHN2c"];

const ExpertAdvice = () => {
  const [key, setKey] = useState("understandingSurrogacy");

  return (
    <div>
      {/* -----Main content----- */}
      <div className="position-relative">
        <img
          src={hands}
          alt="hands"
          className="img-fluid"
          style={{ width: "100%" }}
        />
        <div className="bg-trans-black">
          <Container className="text-center">
            <h1
              className="text-white fw-bold"
              style={{ marginTop: 210, fontSize: "5rem" }}
            >
              Surrogacy advice!
            </h1>
            <p className="fs-2 text-white mt-4 fw-bold">
              Exploring surrogacy? We’re here to help
            </p>
          </Container>
        </div>
      </div>

      {/* ---------Videos---------- */}
      <Container className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="text-center fw-bold" style={{ maxWidth: "1000px" }}>
            Our expert team has created videos to prepare you for the journey of
            surrogacy
          </h1>
        </div>

        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mt-5">
          <Tab
            eventKey="understandingSurrogacy"
            title="Understanding Surrogacy"
            className="mt-5"
          >
            <Row>
              {understandingSurrogacy.map((item) => (
                <Col md={4}>
                  <iframe
                    height="315"
                    src={`https://www.youtube.com/embed/${item}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab
            eventKey="medicalProcedures"
            title="Medical Procedures"
            className="mt-5"
          >
            <Row>
              {medicalProcedures.map((item) => (
                <Col md={4}>
                  <iframe
                    height="315"
                    src={`https://www.youtube.com/embed/${item}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab
            eventKey="choosingtheRightSurrogate"
            title="Choosing the Right Surrogate"
            className="mt-5"
          >
            <Row>
              {choosingtheRightSurrogate.map((item) => (
                <Col md={4}>
                  <iframe
                    height="315"
                    src={`https://www.youtube.com/embed/${item}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default ExpertAdvice;
