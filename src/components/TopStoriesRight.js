import React,{useRef,useEffect} from 'react'
import "./TopStoriesRight.css"
import HorizontalCard from './HorizontalCard'


const TopStoriesRight = (props) => {
    const cardRef=useRef([])
    cardRef.current=[]

    const cardStyle=()=>{
        for(var i=0;i<cardRef.current.length;i++){
            cardRef.current[i].style.width="20%"
        }
    }

    useEffect(()=>{
        cardStyle()
    },[])


    const addToRef=(el)=>{
        if(el && !cardRef.current.includes(el)){
            cardRef.current.push(el)
        }
    }

    return (
        <>
            <div className="topStoriesRight__container">
                <div className="topStoriesRight__header">
                    <h2> Health News</h2>   
                </div>
                <div className="topStoriesRight__newsSection">
                    {props.health && props.health.map((props,index)=>(
                        <a href={props.url} target="_blank" rel="noopener noreferrer" key={index}><HorizontalCard {...props} className="healthTech"  ref={addToRef}/></a>
                    ))}   
                </div>
            </div>
            
            <div className="topStoriesRight__container">
                <div className="topStoriesRight__header">
                    <h2> Tech News</h2>   
                </div>
                <div className="topStoriesRight__newsSection">
                    {props.tech && props.tech.map((props,index)=>(
                        <a href={props.url} target="_blank" rel="noopener noreferrer" key={index}><HorizontalCard {...props} className="healthTech techNews"  ref={addToRef}/></a>
                    ))}   
                </div>
            </div>           
        </>
    )
}

export default TopStoriesRight
