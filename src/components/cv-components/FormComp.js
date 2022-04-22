import React from "react";
import "../../css/Form.css"
import { Personal } from "./form-components/Personal";
import { Experience } from "./form-components/Experience";
import { Education } from "./form-components/Education";
import { Skills } from "./form-components/Skills";

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


    render(){
        return(
            <div className="form-container">
                {this.props.isPreview
                    ? <span>
                        Previewed
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