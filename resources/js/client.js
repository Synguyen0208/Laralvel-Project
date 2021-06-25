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


function Client() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default Client;