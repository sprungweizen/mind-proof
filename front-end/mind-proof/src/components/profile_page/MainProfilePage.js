import React from "react";
import user from "../../data_elements/user";
import Button from "../Button";


// var nameInput;
// var aboutInput;

class MainProfilePage extends React.Component{

  state = {
    user: user,
    editingSettings: false
  }

  constructor(props){
    super(props);
    this.nameInput = React.createRef();
    this.aboutInput = React.createRef();
  }

  saveProfile = () => {
    if(this.state.editingSettings)
    {
      this.setState( prevState => ({
        editingSettings: false
      }));
    }
    else
    {
      this.setState( prevState => ({
        editingSettings: true
      }));
    }
    console.log("test");
    this.render();
    // Console.log("Test");
    // this.setState( prevState => ({
    //   firstName: this.nameInput.value.split(" ", 1)[0],
    //   lastName: this.nameInput.value.split(" ", 1)[1]
    // }));
  }

  render(){
    return(
      <div className={ "profile-page" }>
        <MainProfileContent />
        <ProfileSideBar editingSettings={ this.state.editingSettings } user={ user } clicked={ this.saveProfile }/>
      </div>
    );
  }
}


const ProfileSideBar = (props) => {
  return(
    <ProfileSection editingSettings={props.editingSettings} user={ props.user } clicked={ props.clicked }/>
  );
}


const MainProfileContent = () => {
  return(
    <div className={ "profile-main-content" }>
    </div>
  );
}

const ProfileSection = (props) => {
  return(
    <div className={ "profile-side-bar" }>
      <ProfileImage user={ props.user } editingSettings={ props.editingSettings }/>
      <NameText user={ props.user } editingSettings={ props.editingSettings }/>
      <UserNameText user={ props.user } editingSettings={ props.editingSettings }/>
      <AboutUserText user={ props.user } editingSettings={ props.editingSettings }/>
      <SaveButton editingSettings={ props.editingSettings } clicked={ props.clicked }/>
    </div>
  );
}

const ProfileImage = (props) => {
  if(!props.editingSettings)
    return(
      <img src={ require("../../img/" + props.user.profileImg + ".png")} alt={"Sorry, We couldn´t load it"}/>
    );
  else
    return(
      <img src={ require("../../img/" + props.user.profileImg + ".png")} alt={"Sorry, We couldn´t load it"}/>
    );
}

 

// const ChangedNameValue = (firstName, lastName) => {
//   this.setState( prevState => ({
//     firstName: firstName,
//     lastName: lastName
//   }));
// }

// const ChangedAboutValue = (aboutText) => {
//   this.setState( prevState => ({
//     about: aboutText
//   }));
// }

const SaveButton = (props) => {
  if(props.editingSettings)
    return(
      <Button children="save" onClick={ props.clicked } id={ "profile-save-btn" }/>
    );
  else
    return(
      <Button children="Settings" onClick={ props.clicked } id={ "profile-save-btn" }/>
    );
}

const NameText = (props) => {
  if(!props.editingSettings)
    return(
      <h2>{ props.user.firstName + " " +  props.user.lastName }</h2>
    );
  else
    return(
      <input type={"text"} placeholder={ props.user.firstName + " " +  props.user.lastName }/>
    );
}

const UserNameText = (props) => {
  return(
    <h4>{ "@" + props.user.username }</h4>
  );
}

const AboutUserText = (props) => {
  if(!props.editingSettings)
    return(
      <p>{ props.user.about }</p>
    );
  else
    return(
      <textarea rows="4" cols="50" defaultValue={ props.user.about }></textarea>
    );
}

export default MainProfilePage;
