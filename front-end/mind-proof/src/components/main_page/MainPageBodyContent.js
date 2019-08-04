import React from "react";
import Timeline from "./Timeline";

const MainPageBodyContent = () => {
  return(
    <div className="body-container">
      <MainPageLeftSideBar />
      <Timeline />
      <MainPageRightSideBar />
    </div>
  );
}

const MainPageLeftSideBar = () => {
  return(
    <div className="left-column"></div>
  );
}

const MainPageRightSideBar = () => {
  return(
    <div className="right-column"></div>
  );
}


export default MainPageBodyContent;
