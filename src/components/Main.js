import React from "react";
import { FormComp } from "./cv-components/FormComp";
import { Preview } from "./cv-components/Preview";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";



class Main extends React.Component {

    render(){
        return(
                <Container>
                    <Row>
                        <Col md={10}>
                        <FormComp />
                        </Col>
                        <Col md={2}>
                        <Preview />
                        </Col>
                    </Row>
                </Container>
        )
    }
}
export { Main };