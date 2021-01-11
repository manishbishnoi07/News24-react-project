import React,{useEffect, useState} from 'react'
import "./Navbar.css"
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import {NavLink} from "react-router-dom"
const Navbar = ({sports,business,entertainment}) => {
    const [active,setActive]=useState(false)
    
    useEffect(()=>{
        if(active){
            document.body.style.overflow="hidden"
        }
        else{
            document.body.style.overflow="auto"
        }
    },[active])

    const mobileMenu=()=>{
        setActive(!active)
        if(!active){
            document.body.style.overflow="hidden"
        }
        else{
            document.body.style.overflow="auto"
        }
    }

    const close=()=>{
        setActive(false)
        document.body.style.overflow="auto"
    }

    return ( 
        <div className='navbar'>
            <div className='navbar__area'>
                <div className='navbar__left'>
                    <NavLink onClick={close} to="/">News <span>24</span></NavLink>
                </div>
                <ul  className={`${active===true?'active':''}`}>
                    <li className={`${active===true?'fade':''}`}><NavLink onClick={close}  to="/topstories" activeClassName="selectedLink">Top Stories</NavLink></li>
                    <li className={`${active===true?'fade':''}`}><NavLink onClick={close} to={{pathname:"/sports",state:sports}} activeClassName="selectedLink">Sports</NavLink></li>
                    <li className={`${active===true?'fade':''}`}><NavLink onClick={close} to={{pathname:"/more",state:{business,entertainment}}} activeClassName="selectedLink">More</NavLink></li>
                    <li className={`${active===true?'fade':''}`}><NavLink onClick={close}  to="/search" activeClassName="selectedLink">Search</NavLink></li>
                </ul>
                <span onClick={mobileMenu}>{active===true?<CloseIcon/>:<MenuTwoToneIcon/>}</span>
            </div>
        </div>
    )
}

export default Navbar
