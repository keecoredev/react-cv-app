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
                <form className="cv-form" onSubmit={this.props.educationOnSubmitHandler}>
                    <Row>
                        <div className="title">Education 
                            <span className="title-buttons">
                                {this.props.isToggeledEducation
                                    ?   <button type="button" className="add-button btn btn-orange mb1 bg-orange"
                                    onClick={this.props.educationToggleClicked}>
                                    <BsDashLg /></button>
                                    :   <button type="button" className="add-button btn btn-orange mb1 bg-orange"
                                    onClick={this.props.educationToggleClicked}>
                                    <BsPlusLg /></button>
                                }
                                <button type="button" className="delete-button btn btn-danger mb1 bg-red"><BsXLg /></button>
                                
                            </span>  
                        </div>
                    </Row> 
                    {this.props.isToggeledEducation &&
                   
                        <div>
                            <Row>
                                <Col md={6}>
                                    <input type="text" placeholder="School name" name="schoolname" id="schoolname" onChange={this.props.onChangeHandle}/>
                                </Col>
                                <Col md={6}>
                                    <input type="text" placeholder="Title of Study" name="studtitle" id="studtitle" onChange={this.props.onChangeHandle}/>
                                </Col>
                                <Col md={6}>
                                    <input type="text" placeholder="Grade" id="grade" name="grade" onChange={this.props.onChangeHandle}/>
                                </Col>
                                <Col md={3}>
                                    <label htmlFor="start-date">From: </label>
                                    <input type="date" id="studstartdate" name="studstartdate" onChange={this.props.onChangeHandle}/>
                                </Col>
                                <Col md={3}>
                                    <label htmlFor="end-date">To: </label>
                                    <input type="date" id="studenddate" name="studenddate" onChange={this.props.onChangeHandle}/>
                                </Col>
                            </Row>
                            <input type="submit" className="btn btn-orange mb1 bg-orange" value="Save" />
                        </div>
                       }  

                </form>
            </div>
        )
    }
 }

 export { Education };