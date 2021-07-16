import React from "react";
import ReactDOM from 'react-dom';

// import "bootstrap/dist/css/bootstrap.css";
import Form from "./Client/component/Form";
import Table from "./Client/component/Table";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  Link
} from "react-router-dom";
import Header from "./Client/component/header/header";
import Content from "./Client/component/content";
import Footer from "./Client/component/footer/footer";

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