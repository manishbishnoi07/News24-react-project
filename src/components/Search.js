import React, { useEffect, useState} from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios"
import Card from "./Card"
import Loader from "./Loader"

const Search = () => {
    const [string,setString]=useState("")
    const [find,setFind]=useState("modi")
    const [news,setNews]=useState([])
    const [loading,setLoading]=useState(true)
    
    const notify = () => toast.error("No news found!",{
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const warning = () => toast.warn('Enter something',{
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

    useEffect(()=>{
        const getNews= async ()=>{
            const {data}=await Axios.get(`https://gnews.io/api/v4/top-headlines?q=${find}&lang=en&token=a432a2ee1e29bbb1f1a1e86849d6c15e`)
            if(data && data.articles.length===0){
                setTimeout(()=>{
                    setLoading(false)
                },50)
                notify();
            }
            else if(data){
                setNews(data.articles)
                setTimeout(()=>{
                    setLoading(false)
                },100)
            }
        }
        getNews();
    },[find])

    const findNews=(e)=>{
        e.preventDefault();
        if(string===""){
            warning()
            return
        }
        setFind(string)
        setString("")
        setLoading(true)
    }

    const findString=(e)=>{
        setString(e.target.value)
    }

    return (
        <>
            <div className="search">
            {loading===true?
            <Loader/>:
                <>
                <div className="search__field">
                    <form onSubmit={findNews}>
                        <input onChange={findString} type="text" value={string}  placeholder="Search here..."/>
                        <button>Search</button>
                        <SearchIcon className="searchIcon" onClick={findNews}/>
                    </form>
                </div>
                <div className="news__section">
                    <div className="cards__section">
                    {news.map((item,index)=>(
                        <Card key={index} title={item.title} description={item.description} url={item.url} image={item.image} date={item.publishedAt}/>
                    ))}                    
                    </div>
                </div>
                <ToastContainer autoClose={4000} position="bottom-center" />
                </>
            }
            </div>
        </>
    )
}

export default Search
