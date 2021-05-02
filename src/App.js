import React from 'react';
import Home from './Components/Home Page/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Components/ProjectsPage/Projects/Projects';
import Blog from './Components/BlogsPage/Blog/Blog';
import Computer from './Components/ProjectsPage/Computer/Computer';
import MyInfo from './Components/MyInfoPage/MyInfo/MyInfo';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blog></Blog>
        </Route>
        <Route path="/myInfo">
          <MyInfo></MyInfo>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
