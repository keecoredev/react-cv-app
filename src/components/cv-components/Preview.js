import React from "react";

class Preview extends React.Component {


    render(){
        return(
            <div>
                {this.props.isPreview 
                    ? <button type="button" onClick={this.props.isPreviewClicked}>Back to Form</button>
                    : <button type="button" onClick={this.props.isPreviewClicked}>See CV</button>
                }
                
            </div>
        )
    }
}


export { Preview };