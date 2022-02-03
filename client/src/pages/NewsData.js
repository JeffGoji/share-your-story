import React, { useState } from 'react';



function NewsData() {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    async function fetchApiHandler() {
        setIsLoading(true)

        const response = await fetch("https://free-news.p.rapidapi.com/v1/search?q=medical%20malpractice&lang=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "62c8779371mshbff20bdd022f164p134649jsnc522b3076263"
            }
        })
        const data = await response.json();

        //.then(data=>{data.results;})
        const transformedNews = data.articles.map((newsFeed => {
            return {
                title: newsFeed.title,
                link: newsFeed.link,
                source: newsFeed.clean_url,
                summary: newsFeed.summary,

            };
        })
        )
        setNews(transformedNews)
    };

    return (

        <div className="card p-2 mb-4">

            <button className='btn btn-lg btn-warning'
                onClick={fetchApiHandler}>Click here to load latest headlines</button>
            <br />
            {news.map(newsCards => (
                <>
                    <div className="card mb-4 mt-2" key={newsCards.id}>
                        <div className="card-header text-center fw-bold fs-4">
                            {newsCards.title}
                        </div>
                        <div className="card-body fs-5 fw-normal shadow-none">
                            {newsCards.summary}
                        </div>
                        <div className='card-footer text-center'>
                            <a href={newsCards.link} className='link-primary'>{newsCards.source}</a>
                        </div>
                    </div>
                </>
            ))}

            <h6 className="text-center">powered by <a href="https://newscatcherapi.com/free-news-api" className='link-info'>free-news-api</a></h6>
        </div>
    )
}


export default NewsData;

