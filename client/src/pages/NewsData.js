import React, { useState } from 'react';

function NewsData() {
    const [news, setNews] = useState([])

    async function fetchApiHandler() {
        const response = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=medicalmalpractice&api-key=fImPQ88CqHVQJoYW9AToopRzH79PyDCR');

        const data = await response.json(news);

        const transformNews = data.results.map((newsData => {
            return {
                abtract: newsData.response.docs.abstract,
                // paragraph: newsData.paragraph,
                // link: newsData.web_url,
                // source: newsData.source,
            }
        }),

            setNews(transformNews)
        )
    };

    return (
        <div className="card p-2 card-shadow border-0 mb-4">
            <div className="card-header text-center">
                <button className='btn btn-lg btn-warning'
                    onClick={fetchApiHandler}>Click here to load latest headlines</button>
            </div>
        </div>
    );
}

export default NewsData;

