import React from "react";
import "./preview.css"

class ExperiencePrev extends React.Component {

    render(){
        console.log(this.props.experienceHeap)
        return (
            <div>
                <div className="nameCV">
                    {this.props.fullname}
                </div>

                <div className="experienceCV">
                    <div className="sec-title">Experiences</div>
                    <ul>
                    {this.props.experienceHeap.map((experience) => {
                        return (
                        <li className="list-comp" key={experience.id}> 
                            <div className="exp-date" >
                                {experience.exstartdate} / {experience.exenddate}
                            </div>
                            <div className="info" >
                                {experience.postitle}
                            </div>
                            <div className="info" >
                                <span style={{fontWeight:"500"}}>{experience.companyname}</span> <span style={{color:"gray",fontWeight:"500",fontSize:"12px"}}> - {experience.positiontasks}</span>
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

export { ExperiencePrev };