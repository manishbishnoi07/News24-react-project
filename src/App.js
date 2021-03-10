import react from 'react'
import "./App.css"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import TopStories from './components/TopStories'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import LandingPage from './components/LandingPage'
import Sports from './components/Sports'
import More from './components/More'

function App() {
  
  return (
    <div className="app">
      <Router>
        <div className="helperDiv"></div>
        <Navbar/>     
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/topstories"><TopStories/></Route> 
          <Route path="/search" component={Search}/>  
          <Route path="/sports" component={Sports}/>  
          <Route path="/more" component={More}/>  
        </Switch>
    
      </Router>
    </div>
  );
}

export default App;
