import React, { useEffect, useState } from 'react'
import "./Sports.css"
import Card from "./Card"
import Axios from "axios"

const Sports = () => {
    const [sports,setSports]=useState([])
    useEffect(()=>{
        const fetchNews=()=>{
            Axios.get("https://gnews.io/api/v4/top-headlines?topic=sports&lang=en&token=a432a2ee1e29bbb1f1a1e86849d6c15e")
            .then(res=>{
                const {data}=res
                setSports(data.articles)
            })
            .catch(errors => {
                console.log(errors)
            })
          }
        fetchNews();
    },[])

    return (
        <div className="search">
            <div className="news__section">
                <div className="cards__section">
                {sports.map((item,index)=>(
                    <Card key={index} title={item.title} description={item.description} url={item.url} image={item.image} date={item.publishedAt}/>
                ))}                    
                </div>
            </div>
        </div>
    )
}

export default Sports
