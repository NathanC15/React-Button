import React, {Component} from 'react';
import './App.css';

class App extends Component {

  sayHello(){
    console.log("Thank you!")
  }

  render() {
  return (
    <div className="App">
      <button onClick={this.sayHello}>Try it</button>
    </div>
  );
}
}
export default App;



//Create the input and submit button
//connect them together
//create a robot to understand the inputs
//create a reponse for the robot to output