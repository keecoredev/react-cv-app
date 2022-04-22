import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import profilePhoto from "../../../assets/pro.png"



class Personal extends React.Component {

    render(){
        return (
            <div>
                <form className="cv-form" onSubmit={this.props.personalOnSaveHdanler}>
                    <div className="title">Personal Information</div>
                    <Row>
                        <Col md={3}>
                            <div>
                                <label htmlFor="profilePic">
                                    <img className="profile-img" alt="prof_image" src={profilePhoto} />
                                </label>
                                <input onChange={this.props.onChangeHandle} type="file" className="hidden" id="profilepic"></input>
                            </div>
                        </Col>
                        <Col md={8} className="form-div">
                            <Row>
                                <Col md={12}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Name and Surname" id="fullname"/>
                                </Col>
                                <Col md={6}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Email" id="email"/>
                                </Col>
                                <Col md={6}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Address" id="address"/>
                                </Col>
                                <Col md={6}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Linkedn" id="linkedn"/>
                                </Col>
                                <Col md={6}>
                                    <input onChange={this.props.onChangeHandle} type="text" placeholder="Github" id="github"/>
                                </Col>
                                <Col className="description-div">
                                    <textarea onChange={this.props.onChangeHandle}  placeholder="Tell us about you"  id="description"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <input type="submit" className="btn btn-orange mb1 bg-orange" value="Save" />
                    
                </form>
            </div>
        )
    }
}


export { Personal };