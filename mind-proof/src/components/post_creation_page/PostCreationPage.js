import React from 'react';
import TitleTextField from "./TitleTextField";
import SummaryTextField from "./SummaryTextField";
import ArticleTextField from "./ArticleTextField";


class PostCreationPage extends React.Component
{
    state = {
        previewOn: false,
        author: 'test'
    }

    render(){
        return(
            <div id={ 'post-creation-page' }>
                <TitleTextField />
                <SummaryTextField />
                <ArticleTextField />
            </div>
        );
    };
}





export default PostCreationPage;