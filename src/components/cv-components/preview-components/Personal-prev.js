import React from "react";
import proPic from "../../../assets/pro.png"

class PersonalPrev extends React.Component {
    render(){

        return (
            <div className="personal-side">
                <div className="photo-prev">
                    <img className="profile-img" src={proPic} alt="profile pic" />

                </div>
                <div className="profileInfo-container">
                    <div className="email-prev">
                        <p className="subtit">Email</p>
                        <p className="info">{this.props.email}</p>
                    </div>
                    <div className="address-prev">
                        <p className="subtit">Address</p>
                        <p className="info">{this.props.address}</p>
                    </div>
                    <div className="linkedn-prev" >
                        <p className="subtit">Linkedn</p>
                        <p className="info">{this.props.linkedn}</p>
                    </div>
                    <div className="github-prev">
                        <p className="subtit">github</p>
                        <p className="info">{this.props.github}</p>
                    </div>
                </div>
            </div>
        )

    }
}

export { PersonalPrev };