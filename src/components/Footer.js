import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <span style={{ fontSize: '30px', color: '#fff', fontWeight: '600' }}>PORTFOLIO</span>
          </Col>
          <Col size={12} sm={6} className="text-center  ">
            <h3 style={{ marginBottom:"20px" }}> Contact</h3>
            <ul style={{ display:"flex" , flexDirection: "column" , textDecoration: "none" , listStyleType: "none" , margin: "0" ,gap: "10px"  }}>
              <li style={{ display:"flex" , gap: "20px" }}> 
                <PhoneIcon /> 063-009-7948
              </li>
              <li style={{ display:"flex" , gap: "20px" }}> 
                <EmailIcon /> 64011212081@msu.ac.th
              </li>
            </ul>
            <p style={{ display:"flex", marginLeft:"35px" }}> Copyright 2025 by Nontapat Maneesang</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
