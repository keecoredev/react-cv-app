import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

class Skills extends React.Component {

    render(){
        return (
            <div>
                <form className="cv-form">
                    <Row>
                        <div className="title">Skills
                            <span className="title-buttons">
                                <button type="button" className="add-button btn btn-orange mb1 bg-orange"><BsPlusLg /></button>
                                <button type="button" className="delete-button btn btn-danger mb1 bg-red"><BsXLg /></button>
                            </span>
                        </div>
                        <Col md={12}>
                            <input type="text" placeholder="School name" id="company-name"/>
                        </Col>   
                    </Row>  
                </form>
                <Row className="skills-list">
                    <Col md={12}>
                                <ul>
                                    <li>asdas</li>
                                    <li>s ds dfs</li>
                                    <li> sda d </li>
                                    <li> asdas</li>
                                </ul>
                    </Col>
                </Row>
            </div>
        )
    }

}

export { Skills };