import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Client/component/header/header";
import Content from "./Client/component/content";
import Footer from "./Client/component/footer/footer";
import './Client/component/css/style.css';
function Client() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Client;