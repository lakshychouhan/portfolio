import { Container, Row, Col } from "react-bootstrap";

// import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/NavIcon.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          {/* <Col size={12} sm={6}>
            {/* <img src={logo} style={{borderRadius:"1.25rem",marginBottom:"20px"}}alt="Logo" /> 
          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
            <a href="https://www.linkedin.com/in/lakshy-chouhan-185425226/" target="_blank" rel="noopener noreferrer">
      <img src={navIcon1} alt="LinkedIn" />
    </a>
    <a href="https://github.com/lakshychouhan"><img src={navIcon2} alt="Github" /></a> */}
               
              
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
