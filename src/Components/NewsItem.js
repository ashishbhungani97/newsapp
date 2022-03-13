import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        console.log('111');
        console.log('222222222');
        let { title, disc, imgurl, newsUrl } = this.props
        return (
            <div className="card my-3" style={{ width: '18rem' }}>
                <img height="191" width="286" src={imgurl ? imgurl : "https://picsum.photos/200/300"} className="card-img-top" alt={imgurl} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{disc}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-info btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
