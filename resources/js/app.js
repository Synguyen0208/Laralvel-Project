import React from "react";
import ReactDOM from 'react-dom';

// import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import Table from "./components/Table";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  Link
} from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content";


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      {/* <Form/> */}
    </div>
  );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}