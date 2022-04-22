import React from "react";
import "../../css/Form.css"
import { Personal } from "./form-components/Personal";
import { Experience } from "./form-components/Experience";
import { Education } from "./form-components/Education";
import { Skills } from "./form-components/Skills";

class FormComp extends React.Component {
    


    render(){
        return(
            <div className="bor form-container">
                <Personal />
                <Experience />
                <Education />
                <Skills />
            </div>
        )
    }
}


export { FormComp }