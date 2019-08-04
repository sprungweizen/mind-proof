import React from 'react';
import axios from 'axios';

import TitleTextField from "./TitleTextField";
import SummaryTextField from "./SummaryTextField";
import ArticleTextField from "./ArticleTextField";


class PostCreationPage extends React.Component
{
    constructor(){
        super();
        this.state = {
            title: '',
            article: ''
        }
    }

    render(){
        // axios.get('http://127.0.0.1:8000/api/v1/posts/?format=json').then(response => this.setState({title: response.data.title, article: response.data.article}));
        axios.get('http://127.0.0.1:8000/api/v1/posts/?format=json').then(response => console.log(response));
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