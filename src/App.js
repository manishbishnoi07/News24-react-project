import react,{useState,useEffect} from 'react'
import "./App.css"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import TopStories from './components/TopStories'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import LandingPage from './components/LandingPage'
import Sports from './components/Sports'
import More from './components/More'
import Axios from "axios"

function App() {
  const [sports,setSports]=useState([])
  const [entertainment,setEntertainment]=useState([])
  const [business,setBusiness]=useState([])

  const fetchNews=()=>{
    const requestOne = Axios.get("https://gnews.io/api/v4/top-headlines?topic=entertainment&lang=en&token=3037748e24f9cf7745cca8649a65bdf8")
    const requestTwo = Axios.get("https://gnews.io/api/v4/top-headlines?topic=business&lang=en&token=3037748e24f9cf7745cca8649a65bdf8")
    const requestThree=Axios.get("https://gnews.io/api/v4/top-headlines?topic=sports&lang=en&token=3037748e24f9cf7745cca8649a65bdf8")
    
    Axios.all([requestOne, requestTwo,requestThree]).then(Axios.spread((...responses) => {
        const data1=responses[0].data
        const data2=responses[1].data
        const data3=responses[2].data
        setEntertainment(data1.articles)
        setBusiness(data2.articles)
        setSports(data3.articles)
    })).catch(errors => {
            console.log(errors)
        })
  }

  useEffect(()=>{
    fetchNews();
  },[])

  return (
    <div className="app">
      <Router>
        <div className="helperDiv"></div>
        <Navbar sports={sports} business={business} entertainment={entertainment}/>     
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/topstories" component={TopStories}/>  
          <Route path="/search" component={Search}/>  
          <Route path="/sports" component={Sports}/>  
          <Route path="/more" component={More}/>  
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
