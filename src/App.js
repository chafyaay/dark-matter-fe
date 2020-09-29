import React, { Component } from 'react';
import './App.css';
import Todo from "./components/todo";
import axios from "axios";

export default class App extends Component {
  state = {
    token: "",
    kpi: ""
  };
  componentDidMount() {
    this.getToken();
  }

  getToken = async () => {
    try {
      let res = await axios.get('http://localhost:81');
      // let header = res.data;

      this.setState(
        {
          token: res.data.csrfToken,
          kpi: res.data["x-gateway-apikey"],
        }
      );

    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (<div className="App">

      <h1>{this.state.token}</h1>

      <Todo kpi={this.state.kpi} token={this.state.token}></Todo>
    </div>);
  }
}



