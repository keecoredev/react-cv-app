import React from "react";
import { FormComp } from "./cv-components/FormComp";
import { Preview } from "./cv-components/Preview";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import uniqid from "uniqid";


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // data of CV
            
            // personal
            profilepic:"",
            fullname:"",
            email:"",
            address:"",
            linkedn:"",
            github:"",
            description:"",
            

            // experience
            
                
            companyname:"",
            postitle:"",
            positiontasks:"",
            exstartdate:"",
            exenddate:"",
            
            
            experienceHeap:[],

            
            schoolname:"",
            studtitle:"",
            grade:"",
            studstartdate:"",
            studenddate:"",
            
            educationHeap:[],

            
            skills:"",
            id:uniqid(),
            
            skillsHeap:[],

            // preview Handler
            isPreview:false,
            isToggeledExperience:true,
        }
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.skillsOnSaveHandler = this.skillsOnSaveHandler.bind(this)
        this.experienceOnSaveHandle = this.experienceOnSaveHandle.bind(this);
        this.educationOnSubmitHandler = this.educationOnSubmitHandler.bind(this);
        
    }

    // Handles

    onChangeHandle = (e) => {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({
            
            [key]: value,
        })
    }
    
    experienceOnSaveHandle = (e) => {
        e.preventDefault();
        
        this.setState({
            experienceHeap:this.state.experienceHeap.concat({
                companyname:this.state.companyname,
                postitle: this.state.postitle,
                positiontasks:this.state.positiontasks,
                exstartdate:this.state.exstartdate,
                exenddate:this.state.exenddate,
                id:uniqid()
            })
        })
    }

    educationOnSubmitHandler = (e) => {
        e.preventDefault();

        this.setState({
            educationHeap:this.state.educationHeap.concat({
                schoolname:this.state.schoolname,
                studtitle:this.state.studtitle,
                grade:this.state.grade,
                studstartdate:this.state.studstartdate,
                studenddate:this.state.studenddate,
                id:uniqid()
            })
        })
    }

    skillsOnSaveHandler = (e) => {
        e.preventDefault();

        this.setState ({
            skillsHeap:this.state.skillsHeap.concat({
                skills:this.state.skills,
                id:uniqid(),
            })
        })
    }

    personalOnSaveHdanler = (e) => {
        e.preventDefault();

        this.setState({
            profilepic: this.state.profilepic,
            fullname: this.state.fullname,
            email: this.state.email,
            address: this.state.address,
            linkedn: this.state.linkedn,
            github: this.state.github,
            description: this.state.description,
        })
    }

    // preview check
    isPreviewClicked = () => {
        this.setState({
            isPreview: !this.state.isPreview
        })
    }

    render(){

        return(
                <Container>
                    <Row>
                        <Col md={10}>
                        <FormComp 
                            isPreview={this.state.isPreview}
                            experienceOnSaveHandle={this.experienceOnSaveHandle}
                            educationOnSubmitHandler={this.educationOnSubmitHandler}
                            skillsOnSaveHandler={this.skillsOnSaveHandler}
                            skillsHeap={this.state.skillsHeap}
                            onChangeHandle={this.onChangeHandle}
                            personalOnSaveHdanler={this.personalOnSaveHdanler}
                            //personal
                            profilepic={this.state.profilepic}
                            fullname={this.state.fullname}
                            email={this.state.email}
                            address={this.state.address}
                            linkedn={this.state.linkedn}
                            github={this.state.github}
                            description={this.state.description}
                            //experience heap
                            experienceHeap={this.state.experienceHeap}
                            //education heap
                            educationHeap={this.state.educationHeap}

                        />
                        </Col>


                        {/* Preview Section */}
                        <Col md={2}>
                        
                        
                        <Preview 
                            isPreview={this.state.isPreview}
                            isPreviewClicked={this.isPreviewClicked}
                        />



                        </Col>
                        
                    </Row>
                </Container>
        )
    }
}
export { Main };