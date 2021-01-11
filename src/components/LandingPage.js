import React, { useEffect,useRef } from 'react'
import "./LandingPage.css"
import {useHistory} from "react-router-dom"
import Phone from "../images/Phone.svg"
import {gsap} from "gsap"

const LandingPage = () => {
    const history=useHistory();
    let animateRef = useRef([]); 
    animateRef.current = [];
    let imageRef=useRef(null)

    useEffect(()=>{
        gsap.from(animateRef.current,{stagger:.5,duration:1,y:-50,opacity:0})
        gsap.from(imageRef.current,{duration:1.2,x:200,opacity:0,delay:.6})
    },[]) 

    return (
        <div className="landingPage">
            <div className="landingPage__left">
                <div className="landingPage__leftContent">
                    <h1 ref={el=>animateRef.current.push(el)}>Stay Ahead In <span>News</span></h1>
                    <h4 ref={el=>animateRef.current.push(el)}>Catch All the latest news with one click</h4>
                    <button ref={el=>animateRef.current.push(el)} onClick={()=>history.push("./topstories")}>Read Now</button>
                </div>
                
            </div>
            <div ref={imageRef} className="phone">
                <img  src={Phone} alt="Phone"/>
            </div>
        </div>
    )
}

export default LandingPage
