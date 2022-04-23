import React from "react";
import "./preview.css"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { SkillsPrev } from "./Skills-prev";
import { ExperiencePrev } from "./Experience-prev";
import { EducationPrev } from "./Education-prev";
import { PersonalPrev } from "./Personal-prev"



class PreviewComp extends React.Component {

    render(){
        return (
            <div>
            
                <Row>
                    <Col md={4} className="preview-container ">
                        <PersonalPrev 
                            profilepic={this.props.profilepic}
                            email={this.props.email}
                            address={this.props.address}
                            linkedn={this.props.linkedn}
                            github={this.props.github}
                        />
                    </Col>
                    <Col md={8} className="preview-container-r">
                        <ExperiencePrev 
                            fullname={this.props.fullname}
                            description={this.props.description}
                            experienceHeap={this.props.experienceHeap}
                        />
                        <EducationPrev 
                             educationHeap={this.props.educationHeap}
                        />
                        <SkillsPrev 
                            skillsHeap={this.props.skillsHeap}
                        />
                    </Col>
                </Row>
                
            </div>
        )
    }

}


export { PreviewComp };