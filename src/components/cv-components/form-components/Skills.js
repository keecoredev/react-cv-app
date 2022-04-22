import React from "react";
import { Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

class Skills extends React.Component {
    

    render(){
        return (
            <div>
                <form className="cv-form" onSubmit={this.props.skillsOnSaveHandler}>
                    <Row>
                        <div className="title" >Skills
                            <span className="title-buttons">
                                {this.props.isToggeledSkills
                                ? <button type="button" className="add-button btn btn-orange mb1 bg-orange"
                                    onClick={this.props.skillsToggleClicked}>
                                    <BsDashLg /></button>
                                : <button type="button" className="add-button btn btn-orange mb1 bg-orange"
                                    onClick={this.props.skillsToggleClicked}>
                                    <BsPlusLg /></button>
                                }
                                <button type="button" className="delete-button btn btn-danger mb1 bg-red"><BsXLg /></button>
                            </span>
                        </div>
                        {this.props.isToggeledSkills &&
                            <div>
                                <input onChange={this.props.onChangeHandle} type="text" placeholder="Enter Your Skills" id="skills" name="skills" />
                                <div className="skills-list">
                                    
                                        <ul>
                                            
                                            {this.props.skillsHeap.map((skill) => {
                                                return <div style={{display:"inline-block"}}> <li key={skill.id}>{skill.skills} <button>x</button></li> </div>
                                            })}
                                        </ul>
                                    
                                </div>
                                <input 
                                    type="submit" 
                                    className="btn btn-orange mb1 bg-orange" 
                                    value="Save"
                                />
                            </div>
                        }
                        
                            
                           
                    </Row>  
                </form>
                
                 
                    
            </div>
        )
    }

}

export { Skills };