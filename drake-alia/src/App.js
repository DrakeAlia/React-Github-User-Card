import React from 'react';
import './App.css'

import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      User: [], 
      Followers: []
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
 .get("https://api.github.com/users/DrakeAlia/followers")
 .then(response => {
   console.log(response);
   this.setState({
     Followers: response.data
   });
 })
 .catch(err => console.log("errorFollowers", err));
}

render() {
  return (
    <div className="App">
      <div className="user">
        <h1>My Github Account</h1>
        <User user={this.state.User} />
      </div>
      <div className="follower">
      <h1>My Github Followers</h1>
     {
       this.state.Followers.map(item => <Followers users={item}/>)
     }
     </div>
    </div>
    );
  }
}


export default App;
