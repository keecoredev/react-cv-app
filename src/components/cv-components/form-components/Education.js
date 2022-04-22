 import React from "react";
 import { Col } from "react-bootstrap";
 import { Row } from "react-bootstrap";

 import { BsPlusLg } from "react-icons/bs";
 import { BsXLg } from "react-icons/bs";
 import { BsDashLg } from "react-icons/bs";

 class Education extends React.Component {

    render(){
        return(
            <div>
                <form className="cv-form">
                    <Row>
                        <div className="title">Education 
                            <span className="title-buttons">
                                <button type="button" className="add-button btn btn-orange mb1 bg-orange"><BsPlusLg /></button>
                                <button type="button" className="delete-button btn btn-danger mb1 bg-red"><BsXLg /></button>
                            </span>
                        </div>
                        <Col md={6}>
                            <input type="text" placeholder="School name" id="company-name"/>
                        </Col>
                        <Col md={6}>
                            <input type="text" placeholder="Title of Study" id="stud-title"/>
                        </Col>
                        <Col md={6}>
                            <input type="text" placeholder="Grade" id="grade"/>
                        </Col>
                        <Col md={3}>
                            <label htmlFor="start-date">From: </label>
                            <input type="date" id="stud-start-date"/>
                        </Col>
                        <Col md={3}>
                            <label htmlFor="end-date">To: </label>
                            <input type="date" id="stud-end-date"/>
                        </Col>
                        
                    </Row>  

                    <input type="submit" className="btn btn-orange mb1 bg-orange" value="Save" />
                </form>
            </div>
        )
    }
 }

 export { Education };