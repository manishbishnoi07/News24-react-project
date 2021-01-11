import React,{useRef,useState,useEffect} from 'react'
import "./TopStoriesRight.css"
import Axios from "axios"
import HorizontalCard from './HorizontalCard'
import Skeleton from "./CustomSkeleton"


const TopStoriesRight = () => {
    const [loading,setLoading]=useState(true)
    const [healthData,setHealthData]=useState([1,2,3,4,5])
    const [techData,setTechData]=useState([1,2,3,4,5])
    const cardRef=useRef([])
    cardRef.current=[]

    const cardStyle=()=>{
        for(var i=0;i<cardRef.current.length;i++){
            cardRef.current[i].style.width="20%"
        }
    }

    const fetchNews= ()=>{
        const requestOne = Axios.get("https://newsapi.org/v2/top-headlines?category=health&pageSize=15&apiKey=233d5143ca60452b91210d3155b12d8d")
        const requestTwo = Axios.get("https://newsapi.org/v2/top-headlines?category=technology&pageSize=15&apiKey=233d5143ca60452b91210d3155b12d8d")
        
        Axios.all([requestOne, requestTwo]).then(Axios.spread((...responses) => {
            const data1=responses[0].data
            const data2=responses[1].data
            setHealthData(data1.articles)
            setTechData(data2.articles)
        })).catch(error => {
            console.log(error)
        })
        setTimeout(()=>{
            setLoading(false)
        },300)
    }


    useEffect(()=>{
        fetchNews()
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
                    {healthData.map((props,index)=>{
                        return loading===true?
                        <Skeleton count={2} key={index} className="healthTech" />:
                        <a href={props.url} target="_blank" rel="noopener noreferrer" key={index}><HorizontalCard {...props} className="healthTech"  ref={addToRef}/></a>
                    })}   
                </div>
            </div>
            
            <div className="topStoriesRight__container">
                <div className="topStoriesRight__header">
                    <h2> Tech News</h2>   
                </div>
                <div className="topStoriesRight__newsSection">
                    {techData.map((props,index)=>{
                        return loading===true?
                        <Skeleton count={2} key={index} className="healthTech techNews"/>:
                        <a href={props.url} target="_blank" rel="noopener noreferrer" key={index}><HorizontalCard {...props} className="healthTech techNews"  ref={addToRef}/></a>
                    })}   
                </div>
            </div>           
        </>
    )
}

export default TopStoriesRight
