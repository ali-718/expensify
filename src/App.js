import React, { Component } from "react";
import "./initializeFirebase";
import * as firebase from "firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Private from "./screens/Private";
import PrivateRoutes from "./PrivateRoutes";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      id: "",
      errors: {},
      Todo: [],
      update: false,
      isAuthenticated: true
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("Todo")
      .on("value", snapshot => {
        const values = this.state.Todo;

        snapshot.forEach(childSnapshot => {
          values.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
      });

    setInterval(() => {
      this.setState(this.state);
    }, 2000);
  }

  Update = e => {
    const value = e.target.value;

    firebase
      .database()
      .ref(`Todo/${value}`)
      .once("value")
      .then(snapshot => {
        const { Title, Content } = snapshot.val();
        this.setState({
          title: Title,
          content: Content,
          id: snapshot.key,
          update: true
        });
      });
  };

  Submit = () => {
    const Title = this.state.title.trim();
    const Content = this.state.content.trim();

    if (Title && Content) {
      firebase
        .database()
        .ref("Todo")
        .push({
          Title,
          Content
        })
        .then(res => console.log("Data added successfully", res))
        .catch(e => console.log("some error occoured", e));

      delete this.state.errors.general;
      this.setState({
        title: "",
        content: ""
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, general: true }
      });
    }
  };

  UpdateData = () => {
    firebase
      .database()
      .ref(`Todo/${this.state.id}`)
      .update({
        Title: this.state.title,
        Content: this.state.content
      })
      .then(() => {
        firebase
          .database()
          .ref("Todo")
          .on("value", snapshot => {
            this.setState({
              Todo: []
            });
            const values = this.state.Todo;

            snapshot.forEach(childSnapshot => {
              values.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
            });
          });
      })
      .catch(e => console.log("some error occoured", e));

    this.setState({
      title: "",
      content: "",
      update: false,
      id: ""
    });
  };

  render() {
    return (
      // <div>
      //   <input
      //     onChange={val => this.setState({ title: val.target.value })}
      //     type="text"
      //     name="Title"
      //     placeholder="title"
      //     style={{ borderColor: this.state.errors.general ? "red" : "" }}
      //     value={this.state.title}
      //   />
      //   {this.state.errors.general ? (
      //     <p style={{ fontSize: 10, color: "red" }}>Please fill all fields</p>
      //   ) : null}
      //   <input
      //     onChange={val => this.setState({ content: val.target.value })}
      //     type="text"
      //     name="Content"
      //     placeholder="Content"
      //     style={{ borderColor: this.state.errors.general ? "red" : "" }}
      //     value={this.state.content}
      //   />
      //   {this.state.errors.general ? (
      //     <p style={{ fontSize: 10, color: "red" }}>Please fill all fields</p>
      //   ) : null}
      //   {this.state.update ? (
      //     <button onClick={this.UpdateData}>Update</button>
      //   ) : (
      //     <button onClick={this.Submit}>Add Data</button>
      //   )}

      //   <select onChange={this.Update} value="">
      //     {this.state.Todo.map(item => (
      //       <option value={item.id} key={item.id}>
      //         {item.Title}
      //       </option>
      //     ))}
      //   </select>

      //   <div style={{ marginTop: 50 }} />
      //   {this.state.Todo.length > 0
      //     ? this.state.Todo.map(item => (
      //         <div
      //           key={item.id}
      //           style={{
      //             marginTop: 20,
      //             borderStyle: "solid",
      //             borderWidth: 1,
      //             padding: 20
      //           }}
      //         >
      //           <p>id : {item.id}</p>
      //           <p>Title : {item.Title}</p>
      //           <p>Content : {item.Content}</p>
      //         </div>
      //       ))
      //     : null}
      // </div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <PrivateRoutes
            isAuthenticated={this.state.isAuthenticated}
            path="/private"
            component={Private}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
