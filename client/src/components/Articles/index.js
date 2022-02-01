import React, { useState } from 'react';
import articles from '../../storydata';
import Card from "../ArticleCard"


function Articles(props) {
    const [ArticleList] = useState(articles);
    return (
        <div >
            <section id="articles" className="container-lg mt-2">

                <div className="row">

                    <h2 className="text-center card-header rounded-3 text-white mb-3">Articles</h2>

                </div>
                <div className="row d-flex justify-content-center mb-5">

                    {props.children}
                    {/* Map through 'portfolioList' and render a 'Card' for each project */}
                    {ArticleList.map((articles) => (
                        <Card
                            key={articles.id}
                            title={articles.title}
                            description={articles.description}

                        />
                    ))}

                </div>


            </section >
        </div>

    );
}

export default Articles;