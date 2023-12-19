import React from 'react'

const NewsItem = (props) => {
  let { title, discription, imageUrl, url, author, publishedAt } = props
  return (
    <div className='my-3'>
      <div className="card" style={{height:'26rem'}}>
        <div style={
          {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0
          }
        } >
          <span class="badge rounded-pill bg-danger">{author}</span>
        </div>

        <img src={imageUrl === null ? 'https://www.kron4.com/wp-content/uploads/sites/11/2023/06/GettyImages-1489225404.jpg?w=1280https://www.kron4.com/wp-content/uploads/sites/11/2023/06/GettyImages-1489225404.jpg?w=1280' : imageUrl} style={{height:'12rem'}} className="card-img-top" alt="alternate card" />
        <div className="card-body ">
          <h5 className="card-title">{(title) ? title.substring(0, 30).concat('...'): null}</h5>
          <p className="card-text">{ (discription) ? discription.substring(0, 70).concat('...'): null }</p>
          <p className="card-text"><small className="text-muted"> Last updated {Date(publishedAt)}</small></p>
          <a href={url} target='_bank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
