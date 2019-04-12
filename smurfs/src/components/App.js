import React, { Component } from "react";
	import "./App.css";
	import { Route} from "react-router-dom";
	import SmurfList from "./SmurfList";
	import AddSmurf from "./AddSmurf";
  import UpdateSmurf from "./UpdateSmurf";
  import Header from "./Header"
	

	class App extends Component {
	  render() {
	    return (
	      <div className="App">
          <div>
          <Header/>
          </div>

        
          <h1>SMURF REDUX VILLIAGE</h1>

	        <div>
            <Route path="/update/:id" component={UpdateSmurf} />
            <Route path="/add" component={AddSmurf} />
            <SmurfList />
	        </div>

	      </div>
	    );
	  }
	}
	

	export default App;
