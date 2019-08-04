import React from "react";
import TitleTextField from "TitleTextField";



class PostCreationPage extends React.Component
{
    state = {
        previewOn: false
    }

    render(){
        return(
            <div id={ 'post-creation-page' }>
                <TitleTextField />
            </div>
        );
    };
}





export default PostCreationPage;