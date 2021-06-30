import React, { Component } from "react";
import "./App.css";

export App extends Component() {

  state = {
    colors: ["grey", "white", "pink"].
    backgroundColor: "",
  };

  handleBackgroundOnChange=(color) => {
    this.setState {(
      backgroundColor: color,
    )}
  }

  return (
    <div className="Components">
      <div className={"Header"}>Hi! I'm Daisy!</div>
        <div className={"Sidebar"} style={{ backgroundColor: this.state.backgroundColor}}>
        <h2>Sidebar</h2>
        <ul className={"color"}>{this.state.colors.map((item) => {

          return (
            <li
              key={index} 
              onClick={() => this.handleBackgroundOnChange(item)}> {item}
            </li>
          );
        })}
        </ul>
        </div>

        <div className={"Body"} style={{ backgroundColor: "goldenrod" }}>
          <h2>Body</h2>
          <img
          className={"img"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTJbqsIsEwaOg08xuxoIc4AqJwj-vSubRcQ&usqp=CAU" alt="Home in Joshua Tree"/>
          <p>This is a Futuro Home - otherwise thought of a UFO-like home. There are only under 70 that were produced in the world, and Joshua Tree is home to one of them in California.</p>

          <div className={"Squares"}>
            Square 1
            <div className={"img"}>
              <img
                className={"img"} src="https://thefuturohouse.com/images/futuros/sophiarose007_pohara_a.jpg" alt="Futuro Home in NZ"/>
              <p>This is one in New Zealand!</p>
            </div>
            Square 2
            <div className={"img"}> 
              <img
                className={"img"} src="https://thefuturohouse.com/images/futuros/LogstrupFuturo01_small.jpg" alt="Futuro Home in Denmark"/>
              <p>This is one (more like two) in Denmark!</p>
            </div>
            Square 3
            <div className={"img"}>
              <img
                className={"img"} src="https://thefuturohouse.com/images/futuros/fur_fr_marche_dauphine_small.jpg" alt="Futuro Home in France"/>
              <p>This is another one in France!</p>
            </div>
          </div>
        </div>
        <div className={"Footer"}>
          <h3 className={"Footer-low"}> All Rights Reserved to Daisy</h3>
        </div>
    </div>
  );
}

export default App;
