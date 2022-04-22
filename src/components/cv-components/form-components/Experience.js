import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

class Experience extends React.Component {

    render(){
        return(
            <div>
                <form className="cv-form">
                    <Row>
                        <div className="title">Experience
                            <span className="title-buttons">
                                <button type="button" className="add-button btn btn-orange mb1 bg-orange"><BsPlusLg /></button>
                                <button type="button" className="delete-button btn btn-danger mb1 bg-red"><BsXLg /></button>
                            </span>
                        </div>
                        <Col md={6}>
                            <input type="text" placeholder="Company name" id="company-name"/>
                        </Col>
                        <Col md={6}>
                            <input type="text" placeholder="Position Title" id="pos-title"/>
                        </Col>
                        <Col md={6}>
                            <textarea type="text" placeholder="Tasks of position" id="position-tasks"/>
                        </Col>
                        <Col md={3}>
                            <label htmlFor="start-date">From: </label>
                            <input type="date" id="start-date"/>
                        </Col>
                        <Col md={3}>
                            <label htmlFor="end-date">To: </label>
                            <input type="date" id="end-date"/>
                        </Col>
                        
                    </Row>
                    <input type="submit" className="btn btn-orange mb1 bg-orange" value="Save" />
                </form>
            </div>
        )
    }

}

export { Experience };