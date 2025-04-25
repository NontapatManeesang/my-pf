import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import line3 from "../assets/img/line-logo3.png";

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '30px', color: '#fff', fontWeight: '600' }}>
            PORTFOLIO
          </span>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#skills_1" className={activeLink === 'skills_1' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills_1')}>Tools</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Works</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="#"><img src={navIcon1} alt="" /></a> */}
                <a href="https://www.facebook.com/frame.return" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook Icon" /></a>
                <a href="https://line.me/ti/p/zQQikr3WZR" target="_blank" rel="noopener noreferrer"><img src={line3} alt="Line Icon" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
