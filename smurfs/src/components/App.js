import React, { Component } from "react";
	import "./App.css";
	import { Route} from "react-router-dom";
	import SmurfList from "./SmurfList";
	import AddSmurf from "./AddSmurf";
  import UpdateSmurf from "./UpdateSmurf";
  import Header from "./Header"
  import About from './About'
  
  
const app = {
  color: '#0491C8',
  fontFamily: 'Chicle, cursive',
}
	class App extends Component {
	  render() {
	    return (
	      <div style={app} className='App'>
          <div>
          <Header/>
          </div>

        
          <h1>SMURF REDUX VILLIAGE</h1>

	        <div>
           
            <Route path="/update/:id" component={UpdateSmurf} />
            <Route path="/add" component={AddSmurf} />
            <Route exact path = "/" component = {SmurfList} />
            <Route path ="/about" component = { About } />
            
	        </div>

	      </div>
	    );
	  }
	}
	

	export default App;
