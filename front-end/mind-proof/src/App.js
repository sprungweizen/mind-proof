import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import MainPageHeader from "./components/main_page/MainPageHeader";
import MainPageBodyContent from "./components/main_page/MainPageBodyContent";
import MainProfilePage from "./components/profile_page/MainProfilePage";


class App extends Component {
  render() {
    return (
      <MainPage />
      //<Profile />
    );
  }
}

//== Home Page - Timeline - etc ==
const MainPage = () => {
  return (
    <div>
      <MainPageHeader />
      <MainPageBodyContent />
    </div>
  );
}

//===User Profile===
const Profile = () => {
  return(
    <MainProfilePage />
  );
}

const Routing = () => {
  return(
    <span>
      <Route path="/" exact component={MainPage} />
      <Route path="/about/" component={Profile} />
    </span>
  );
};



export default App;
