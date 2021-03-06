import React from "react";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  componentDidMount() {
    fetch("api")
      .then(res => res.json())
      .then(data => this.setState({ username: data.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {username ? `Hello ${username}` : "Hello World"}
        </header>
      </div>
    );
  }
}

export default App;
