import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 10,
        category: 'general'
    }

    static propsTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }


    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7b7a95d71c546ce9009d90b2990f84c&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1,
            loading: false

        })

    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7b7a95d71c546ce9009d90b2990f84c&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading: false
        })

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7b7a95d71c546ce9009d90b2990f84c&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, total: parseData.totalResults, loading: false })
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center text-info">Newsapp - Top Headline</h2>
                {this.state.loading && <Spinner />}

                <hr />
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        const { title, url, description, urlToImage } = element;
                        return <div className="col-md-4" key={url}>
                            <NewsItem title={title} disc={description ? description.slice(0, 100) : ''} imgurl={urlToImage} newsUrl={url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">

                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.total / this.props.pagesize)} onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News
