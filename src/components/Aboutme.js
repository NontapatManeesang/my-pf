import { Container } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Aboutme = () => {

  return (
    <section className="aboutme" id="Aboutme">
      <Container>
        <TrackVisibility>
            <div>
              <h2>About Me</h2>
              <p>
                Hello, my name is Nontapat Maneesaeng. I am a recent graduate
                from the Faculty of Informatics with a strong interest and
                dedication to developing web applications on both the Frontend
                and Backend. I previously interned as a Full Stack Developer,
                where I learned about real-world work processes, including
                coding, database management, and teamwork. I am proficient in
                tools and technologies such as HTML, CSS, JavaScript, React,
                Node.js, MySQL, Python, Git, and others. I am enthusiastic,
                ready to learn new things, and able to work well with others.
              </p>
            </div>
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
