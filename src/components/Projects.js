import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import autocorp from "../assets/img/autocorp.jpg";
import doctor from "../assets/img/doctor.jpg";
import logoauto from "../assets/img/logo_autocorp.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import auto from "../assets/img/autocorp.jpg";
import docto from "../assets/img/doctor.jpg";

export const Projects = () => {
  // const projects = [
  //   {
  //     title: "autocorp holding ",
  //     description: "Full Stack Development",
  //     imgUrl: autocorp,
  //   }
  // ];

  // const projects2 = [
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: doctor,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: doctor,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: doctor,
  //   }
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="-work">Works</h2>
                  <p>Training and work experience history</p>
                  <div className="responsive-wrapper">
                    <img src={auto} alt="work Img" className="responsive-img" />

                    <div className="detail_autocorp">
                      <a className="company-name">
                        Company : Autocorp Holding Public Company Limited
                      </a>
                      <br />
                      <a className="company-position">
                        Position : Full Stack Developer
                      </a>
                      <br />
                      <a className="company-assigned">Assigned duties :</a>

                      <ul>
                        <li>Develop internal organizational systems.</li>
                        <li>
                          Develop front-end and back-end systems using various
                          tools such as React, JavaScript, HTML, Bootstrap, CSS,
                          Node.js, MySQL, PostgreSQL, Python, etc.
                        </li>
                        <li>
                          Analyze existing organizational data and apply it for
                          maximum benefit.
                        </li>
                        <li>
                          Reduce workload for internal personnel (write Marco
                          Excel VBA commands for various departments).
                        </li>
                        <li>
                          Procure various data for the organization by
                          collecting information using Selenium with Python.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="responsive-wrapper">
                    <img
                      src={doctor}
                      alt="work Img"
                      className="responsive-img"
                    />

                    <div className="detail_autocorp">
                      <a className="company-name">Company : Cherdsak Clinic</a>
                      <br />
                      <a className="company-position">
                        Position : Medical assistant
                      </a>
                      <br />
                      <a className="company-assigned">Assigned duties :</a>

                      <ul>
                        <li>
                          Developed the clinic's backend data management system,
                          including patient lists, income and expenses, and
                          patient medical records, using tools such as Microsoft
                          Excel to enable easier data verification and
                          retrieval.
                        </li>
                        <li>
                          Prepared and maintained the inventory of goods such as
                          medications and medical equipment to ensure they are
                          always ready for use, including managing purchase
                          orders when restocking is needed.
                        </li>
                        <li>
                          Managed online marketing, promoting the clinic through
                          various channels such as Facebook and LINE OA to
                          increase reach to new customer groups and retain the
                          existing customer base.
                        </li>
                        <li>
                          Coordinated with patients and staff to ensure smooth
                          and efficient service delivery.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
