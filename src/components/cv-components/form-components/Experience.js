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
                <form className="cv-form" onSubmit={this.props.experienceOnSaveHandle}>
                    <Row>
                        <div className="title">Experience
                            <span className="title-buttons">
                                {this.props.isToggeledExperience  
                                    ? <button type="button" className="add-button btn btn-orange mb1 bg-orange" 
                                        onClick={this.props.experienceToggleClicked}>
                                        <BsDashLg />
                                        </button>
                                    : <button type="button" className="add-button btn btn-orange mb1 bg-orange"
                                        onClick={this.props.experienceToggleClicked}>
                                        <BsPlusLg />
                                        </button>
                                }
                                <button type="button" className="delete-button btn btn-danger mb1 bg-red"><BsXLg /></button>
                            </span>
                        </div>
                    </Row>
                    {this.props.isToggeledExperience && 
                        <div>
                            <Row>
                                <Col md={6}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Company name" name="companyname" id="companyname"/>
                                </Col>
                                <Col md={6}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Position Title" name="postitle" id="postitle"/>
                                </Col>
                                <Col md={6}>
                                    <textarea onChange={this.props.onChangeHandle} type="text" placeholder="Tasks of position" name="positiontasks" id="positiontasks"/>
                                </Col>
                                <Col md={3}>
                                    <label htmlFor="start-date">From: </label>
                                    <input onChange={this.props.onChangeHandle} type="date" name="exstartdate" id="exstartdate"/>
                                </Col>
                                <Col md={3}>
                                    <label htmlFor="end-date">To: </label>
                                    <input onChange={this.props.onChangeHandle} type="date"  name="exenddate" id="exenddate"/>
                                </Col>
                                    
                            </Row>
                            <input 
                                type="submit" 
                                className="btn btn-orange mb1 bg-orange" 
                                value="Save"
                            />
                            
                        </div>
                    }
                    
                   
                </form>
            </div>
        )
    }

}

export { Experience };