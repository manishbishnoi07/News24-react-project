import React, { useEffect, useState } from 'react'
import "./More.css"
import SlideShow from './SlideShow'
import Axios from 'axios'

const More = () => {
    const [entertainment,setEntertainment]=useState([])
    const [business,setBusiness]=useState([])
    useEffect(()=>{
        const fetchNews=()=>{
            const requestOne = Axios.get("https://gnews.io/api/v4/top-headlines?topic=entertainment&lang=en&token=a432a2ee1e29bbb1f1a1e86849d6c15e")
            const requestTwo = Axios.get("https://gnews.io/api/v4/top-headlines?topic=business&lang=en&token=a432a2ee1e29bbb1f1a1e86849d6c15e")
            Axios.all([requestOne, requestTwo]).then(Axios.spread((...responses) => {
                const data1=responses[0].data
                const data2=responses[1].data
                setEntertainment(data1.articles)
                setBusiness(data2.articles)
            })).catch(errors => {
                console.log(errors)
            })
        }
        fetchNews();
    },[])
    return (
        <div className="more">
            <div className="more__section">
                {/* Entertainment */}
                    <SlideShow news={entertainment} heading="Entertainment"/>
                {/* Business */}
                    <SlideShow news={business} {...business} heading="Business"/>
            </div>
        </div>
    )
}

export default More
