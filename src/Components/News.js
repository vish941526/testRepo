
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  const [articles, setarticles] = useState([])
  const [totalResults, settotalResults] = useState(0)
  const [page , setpage]= useState(1)
  const [loading, setloading]=useState(true)

  document.title=`${ props.category}-InsightSync`



  const updateNews = async ()=>{
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.ApiKey}&pageSize=${ props.pageSize}`;
  setloading(true)
  let data = await fetch(url);
  props.setProgress(30);
  let parsedData = await data.json()
  props.setProgress(70);
  setarticles(parsedData.articles)
  settotalResults(parsedData.totalResults)
  setloading(false)
  props.setProgress(100);
}

useEffect(() => {
  updateNews()
},[])

 const fetchMoreData = async () => {
  setpage(page+1)
  let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.ApiKey}&pageSize=${ props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  setarticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
  setloading(false)
  }
    return (
      <div className='container my-4'>
        <h1  className='text-center  mb-4' style={{color: '#5f39cb',margin:'67px'}}> Top { props.category} Headlines From InsightSync</h1>
        { loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={ fetchMoreData}
          hasMore={articles.length !==  totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className="row">
          { articles.map((elements)=>{
              return  <div className='col-md-4 '>
                  <NewsItem title={elements.title} discription={elements.description} publishedAt={elements.publishedAt} author={elements.author} imageUrl={elements.urlToImage} url={elements.url}/>
                </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    )
  
}

News.defaultProps={
  pageSize:5,
  country: 'in',
  category: 'general'
}
 News.prototype={
  pageSize:PropTypes.number,
  country: PropTypes.string,
  category:PropTypes.string,
}
export default News

