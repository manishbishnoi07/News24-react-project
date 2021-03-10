import React,{useState, useEffect} from 'react'
import HorizontalCard from './HorizontalCard'
import TopStoriesRight from "./TopStoriesRight"
import Axios from "axios"
import Option from "./Option"
import "./TopStories.css"
import Carousel from './Carousel';
import Skeleton from "./CustomSkeleton"

const TopStories = () => {
    
    const [health,setHealth]=useState([])
    const [tech,setTech]=useState([])
    const [loading,setLoading]=useState(true)
    const [worldNewsData,setWorldNewsData]=useState([1,2,3,4,5,6,7,8])
    const [country,setCountry]=useState("in")
    const newData=worldNewsData.slice(0,8)

  useEffect(()=>{
    const fetchNews=()=>{
        const requestOne = Axios.get("https://gnews.io/api/v4/top-headlines?topic=health&lang=en&token=a432a2ee1e29bbb1f1a1e86849d6c15e")
        const requestTwo = Axios.get("https://gnews.io/api/v4/top-headlines?topic=technology&lang=en&token=a432a2ee1e29bbb1f1a1e86849d6c15e")
        
        Axios.all([requestOne,requestTwo]).then(Axios.spread((...responses) => {
            const data1=responses[0].data
            const data2=responses[1].data
            setHealth(data1.articles)
            setTech(data2.articles)
        })).catch(errors => {
            console.log(errors)
        })
      }
    fetchNews();
  },[])  

    useEffect(()=>{
        const fetchNews=()=>{
            setLoading(true)
            Axios.get(`https://gnews.io/api/v4/top-headlines?country=${country}&token=a432a2ee1e29bbb1f1a1e86849d6c15e`) 
            .then(response=>{
                const {data}=response
                setWorldNewsData(data.articles)
            })
            .catch(error=>{
                console.log(error)
            })
            setTimeout(()=>{
                setLoading(false)
            },300)
        }
        fetchNews()
    },[country])


    return (
        
        <div className="topStories">
            <div className="topStories__container">
 
                <div className="topStories__left">

                    <Carousel loading={loading} worldNewsData={newData}/>

                    <div className="carousel__bottom">
                        <div className="divider">
                            <h1 className="headline">Top Headlines</h1>
                            <hr className="line"/>
                        </div>
                        <div className="worldNews">
                            <Option key="123" className="optionArea" setCountry={setCountry}/>   
                            {newData.map((props,index)=>{
                                   return loading===true?
                                    <Skeleton count={4} key={index} className={`left__horizontalCard grid${index}`}/>:
                                    <HorizontalCard flag {...props} className={`left__horizontalCard grid${index}`} key={index}/>
                            })}
                        </div>
                    </div>
                </div>
                            
                <div className="topStories__right">
                    <TopStoriesRight health={health} tech={tech}/>  
                </div>
                
               
            </div>
        </div>  
    )
}

export default TopStories
