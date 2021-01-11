import React,{useState, useEffect} from 'react'
import HorizontalCard from './HorizontalCard'
import TopStoriesRight from "./TopStoriesRight"
import Axios from "axios"
import Option from "./Option"
import "./TopStories.css"
import Carousel from './Carousel';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import Skeleton from "./CustomSkeleton"

const TopStories = () => {
    const [loading,setLoading]=useState(true)
    const [worldNewsData,setWorldNewsData]=useState([1,2,3,4,5,6,7,8])
    const [country,setCountry]=useState("in")
    const [currentPage,setCurrentPage]=useState(1)
    const [newsPerPage]=useState(8)
    //Pagination
    const lastIndex=currentPage*newsPerPage
    const firstIndex=lastIndex-newsPerPage
    const newData=worldNewsData.slice(firstIndex,lastIndex)

    const fetchNews=()=>{
        setLoading(true)
        Axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=32&apiKey=233d5143ca60452b91210d3155b12d8d`)
        .then(response=>{
            const {data}=response
            setWorldNewsData(data.articles)
        })
        .catch(error=>{
            console.log(error)
        })
        setTimeout(()=>{
            setLoading(false)
        },100)
    }

    useEffect(()=>{
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
                            <Option key="123" className="optionArea" setCountry={setCountry} setCurrentPage={setCurrentPage}/>   
                            {newData.map((props,index)=>{
                                   return loading===true?
                                        <Skeleton count={4} key={index} className={`left__horizontalCard grid${index}`}/>:
                                        <HorizontalCard flag {...props} className={`left__horizontalCard grid${index}`} key={index}/>
                            })}
                            <div className="paginate">
                                <IconButton size="medium" onClick={()=> currentPage>1 && setCurrentPage(prev=>prev-1)}>
                                    <NavigateBeforeIcon />  
                                </IconButton>
                                <IconButton size="medium" onClick={()=> currentPage<4 && setCurrentPage(prev=>prev+1)}>
                                    <NavigateNextIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                            
                <div className="topStories__right">
                    <TopStoriesRight/>  
                </div>
                
               
            </div>
        </div>  
    )
}

export default TopStories
