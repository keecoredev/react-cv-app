import React from "react";
import "../../css/Form.css"
import { Personal } from "./form-components/Personal";
import { Experience } from "./form-components/Experience";
import { Education } from "./form-components/Education";
import { Skills } from "./form-components/Skills";
import { PreviewComp } from "./preview-components/PreviewComponent";


class FormComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
            // toggle
            isToggeledExperience:false,
            isToggeledEducation:false,
            isToggeledSkills:false
        }
    }
    
    experienceToggleClicked = () => {
        this.setState({
            isToggeledExperience: !this.state.isToggeledExperience
        })
    }

    educationToggleClicked = () => {
        this.setState({
            isToggeledEducation: !this.state.isToggeledEducation
        })
    }
    skillsToggleClicked = () => {
        this.setState({
            isToggeledSkills: !this.state.isToggeledSkills
        })
    }
    // profilepic={this.state.profilepic}
    // fullname={this.state.fullname}
    // email={this.state.email}
    // address={this.state.address}
    // linkedn={this.state.linkedn}
    // github={this.state.github}
    // description={this.state.description}
    // //experience heap
    // experienceHeap={this.state.experienceHeap}
    // //education heap
    // educationHeap={this.state.educationHeap}
    // skillsHeap={this.state.skillsHeap}
    render(){
        return(
            <div className="form-container">
                {this.props.isPreview
                    ? <span>
                        <PreviewComp 
                            profilepic={this.props.profilepic}
                            fullname={this.props.fullname}
                            email={this.props.email}
                            address={this.props.address}
                            linkedn={this.props.linkedn}
                            github={this.props.github}
                            description={this.props.description}
                            experienceHeap={this.props.experienceHeap}
                            educationHeap={this.props.educationHeap}
                            skillsHeap={this.props.skillsHeap}

                        />
                    </span>
                    : <span>
                        <Personal 
                            personalOnSaveHdanler={this.props.personalOnSaveHdanler}
                            onChangeHandle={this.props.onChangeHandle}
                        />
                        <Experience 
                            isToggeledExperience={this.state.isToggeledExperience}
                            experienceToggleClicked={this.experienceToggleClicked}
                            experienceOnSaveHandle={this.props.experienceOnSaveHandle}
                            onChangeHandle={this.props.onChangeHandle}
                        />
                        <Education 
                            isToggeledEducation={this.state.isToggeledEducation}
                            educationToggleClicked={this.educationToggleClicked}
                            onChangeHandle={this.props.onChangeHandle}
                            educationOnSubmitHandler={this.props.educationOnSubmitHandler}
                        />
                        <Skills 
                            isToggeledSkills={this.state.isToggeledSkills}
                            skillsToggleClicked={this.skillsToggleClicked}
                            skillsOnSaveHandler={this.props.skillsOnSaveHandler}
                            onChangeHandle={this.props.onChangeHandle}
                            skillsHeap={this.props.skillsHeap}
                        />
                    </span>
                    
                }
                
            </div>
        )
    }
}


export { FormComp }