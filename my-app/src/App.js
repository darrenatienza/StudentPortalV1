import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Topbar from "./Components/Topbar";
import Sidebar from './Components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from './Components/pages/userList/UserList';
import Home from './Components/pages/home/Home';
import StudentProfile from './Components/pages/studentProfile/StudentProfile';
import NewUser from './Components/pages/home/newPage/NewUser';
import Modules from './Components/modules/Modules';


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/> 
        <Switch>
          <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/users">
        <UserList/>
        </Route>
        <Route path="/studentprofile">
        <StudentProfile/>
        </Route>
        <Route path="/modules">
          <Modules/>
        </Route>
        <Route path="/newUser">
        <NewUser/>
        </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
