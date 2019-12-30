import React,{Component} from 'react';
import Router from './router';
import One from './router/one';
import '../src/assets/css/reset.css'
import '../src/assets/js/remScale'
import axios from 'axios'

Component.prototype.axios = axios
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router routes={One}></Router>
      </div>
    )
  }
}

export default App;
