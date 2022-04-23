import React from "react";

class SkillsPrev extends React.Component {

    render(){
        return (
            <div>
                <div className="skillsCV">
                    <div className="sec-title">Skills</div>
                    <ul>
                    {this.props.skillsHeap.map((skill) => {
                        return (
                        <li className="list-comp" key={skill.id}> 
                            <div className="info" >
                                {skill.skills}
                            </div>
                           
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

export { SkillsPrev };