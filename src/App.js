import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Maincontainer from "./components/Maincontainer";
// import ImageCarousel from "./components/ImageCarousel"

const App = () =>{
  return (
    <div className="App">
          <Maincontainer />
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }

export default hot(module)(App);
