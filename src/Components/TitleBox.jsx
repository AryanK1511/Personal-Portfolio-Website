import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TitleBox = () => {
    return(
        <Container fluid={true} className="heading-container">
            <Row className="text-center">
                <Col>
                    <h1 className="main-heading">
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
                        <h2>Software Developer.</h2>
                    </div>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Button variant="primary">Primary</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default TitleBox;