import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      User: {}, 
      Follwers: [],
      Searchfollowers: ""
    };
  }
  componentDidMount() {
    axios
    .get("https://api.github.com/users/DrakeAlia") 
    .then(res => {
      console.log("userData", res.data);
      this.setState({
        ...this.state,
        User: res.data
      });
    })
    .catch(err => console.log("errorUsers", err));

 axios
 .get("https://api.github.com/users/DrakeAlia/Followers")
 .then(response => {
   console.log(response);
   this.setState({
     Followers: response.data
   });
 })
 .catch(err => console.log("errorFollowers", err));
}

// handleSearchFollowers = e => {
//   this.setState 
// }

render() {
  console.log(this.state);

  return (
    <div className="App">
    <h1>My Github Usercard</h1>
    {/* <input 
     type="text"
     value={this.state.doggoText}
     onChange={this.handleChanges}
   /> */}
    </div>

    )
  }
}

export default App;
