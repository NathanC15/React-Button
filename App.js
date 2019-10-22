import React, {Component} from 'react';
import './App.css';

class App extends Component {

  sayHello(){
    console.log("Hello!")
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
