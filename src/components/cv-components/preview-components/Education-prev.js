import React from "react";

class EducationPrev extends React.Component {

    render(){
        return (
            <div>
                <div className="educationCV">
                    <div className="sec-title">Education</div>
                    <ul>
                    {this.props.educationHeap.map((education) => {
                        return (
                        <li className="list-comp" key={education.id}> 
                            <div className="exp-date" >
                                {education.studstartdate} / {education.studenddate}
                            </div>
                            <div className="info" >
                                {education.schoolname}
                            </div>
                            <div className="info" >
                                <span style={{fontWeight:"500"}}>{education.studtitle}</span> <span style={{color:"gray",fontWeight:"500",fontSize:"12px"}}> - {education.grade}</span>
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

export { EducationPrev };