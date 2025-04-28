import { Container, Row, Col } from "react-bootstrap";
import developersphoto from "../assets/img/developers-photo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={developersphoto}
                  alt="Contact"
                />
              }
            </TrackVisibility>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p style={{ fontSize: '20px' }}>
                    I am a person who works well with others, is responsible, honest, diligent, patient, open to new things, and always ready to develop myself. 🚀
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
