import React from 'react';
import Button from "../Button";

//will contain elements that store the navigation
const MainPageHeader = () => {
  return (
    <div className="header">
      <h1>Mindblow</h1>
      <div className="header-btn-group">
        <Button onClick = {()=> {}} id={"normal-btn"}>Sign In</Button>
        <Button onClick = {()=> {}} id={"normal-btn"}>Sign Up</Button>
      </div>
    </div>
  );
}

export default MainPageHeader;
