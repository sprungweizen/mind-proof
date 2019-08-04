import React from "react";
import PropTypes from "prop-types";
import PostBtnGroup from "./PostBtnGroup";
import Bar from "./Bar";
// import img from './img';

const Post = (props) => (
  <div id={ props.styleID }>
      <img src={ require("../img/" + props.imgURL +  ".png") } alt="post" />
      <h2>{ props.title }</h2>
      <p>{ props.text }</p>
      <PostBtnGroup />
      <div className={"flex-right"}>
        <Bar fillValue={ props.barFillValue <= 100 ? props.barFillValue : 100 }/>
      </div>
    </div>
);



Post.propTypes = {
  styleID: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  imgURL: PropTypes.string.isRequired
  // key: PropTypes.string.isRequired
};

Post.defaultProps = {
  styleID: "post",
  title: "Hello World",
  text: "Lorem ipsum",
};

export default Post;

const props = {
  a: 1,
  b: 2,
  test: 3,
};

console.log(props)
