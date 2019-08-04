import React from "react";
import Button from "./Button";

var id = "like-btn";
var unlikedID = "like-btn";
var likedID = "like-btn-liked";

class PostBtnGroup extends React.Component {

  state = {
    likes: 0,
    liked: false
  };

  like = () => {
    if(!this.state.liked)
    {
      this.setState( prevState => ({
          liked: true,
          likes: prevState.likes+1
      }));
      id = likedID; // change color
    }
    else
    {
      this.setState( prevState => ({
        liked: false,
        likes: prevState.likes-1
      }));
      id = unlikedID;
    }

  };

  render(){
    return(
      <div className="btn-group">
        <p>{ this.state.likes }</p>
        <Button onClick = { this.like } id={id}></Button> 
        <Button onClick = {()=> {}} id={"post-btn"}>Share</Button>
      </div>
    );
  }
}

export default PostBtnGroup;
