import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import Typed from 'react-typed';

const TitleBox = () => {
    return(
        <Container fluid={true} className="heading-container">
            <Row className="text-center">
                <Col>
                    <h1 className="main-heading animate__animated animate__slideInLeft">
                        <span className="red-font">A</span>
                        <span className="yellow-font">R</span>
                        <span className="purple-font">Y</span>
                        <span className="yellow-font">A</span>
                        <span className="purple-font">N</span>
                        <br />
                        <span className="yellow-font">K</span>
                        <span className="red-font">H</span>
                        <span className="purple-font">U</span>
                        <span className="red-font">R</span>
                        <span className="purple-font">A</span>
                        <span className="yellow-font">N</span>
                        <span className="red-font">A</span>
                    </h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <div className="title-para">
                        <h2>
                            <Typed
                                strings={['Software Developer.', 'Web Developer.', 'Computer Science Enthusiast.']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />  
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <a className="title-btn" download="ARYAN KHURANA - RESUME.pdf" href="./Assets/Files/ARYAN KHURANA - RESUME.pdf"><i class="uil uil-import"></i>Resume</a>
                </Col>
            </Row>
        </Container>
    );
}

export default TitleBox;