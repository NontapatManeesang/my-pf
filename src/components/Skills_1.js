
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp2 from "../assets/img/color-sharp2.png"
import DBeaver_logo from "../assets/img/DBeaver_logo.png";
import mysql from "../assets/img/mysql.svg";
import vscode from "../assets/img/vscode.svg";
import postman from "../assets/img/postman.svg";
import figma from "../assets/img/figma.svg";
import postgresSQL from "../assets/img/postgresSQL.svg";
import Wordpress from "../assets/img/Wordpress.png";
import canva from "../assets/img/canva.png";
import powerbi from "../assets/img/Power_BI.png";
import fastapi from "../assets/img/fastapi.png";

import MicrosoftOffice from "../assets/img/MicrosoftOffice.png";

export const Skills_1 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill_1" id="skills_1">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill_1-bx wow zoomIn">
                        <h2 className='-tools'>Tools</h2>
                        <p >Tools that can be used for work</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill_1-slider">
                          <div className="item">
                                <img src={vscode} alt="Image" />
                                <h5>VS Code</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={postgresSQL} alt="Image" />
                                <h5>Postgres SQL</h5>
                            </div>
                            <div className="item">
                                <img src={DBeaver_logo} alt="Image" />
                                <h5>DBeaver</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MY SQL</h5>
                            </div>

                            <div className="item">
                                <img src={postman} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            
                            <div className="item">
                                <img src={Wordpress} alt="Image" />
                                <h5>Wordpress</h5>
                            </div>
                            <div className="item">
                                <img src={canva} alt="Image" />
                                <h5>Canva</h5>
                            </div>
                            <div className="item">
                                <img src={MicrosoftOffice} alt="Image" />
                                <h5>Microsoft Office</h5>
                            </div>
                            <div className="item">
                                <img src={powerbi} alt="Image" />
                                <h5>Power BI</h5>
                            </div>
                            <div className="item">
                                <img src={fastapi} alt="Image" />
                                <h5>Fast API</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}
