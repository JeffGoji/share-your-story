import React from 'react';

function NewsFeed(props) {
    return (
        <div className="card p-2 card-shadow border-0 mb-4">
            <div className="card-header text-center">
                <div>
                    <h2>{props.abstract}</h2>
                    <p>{props.paragraph}</p>
                    <h4>{props.link}</h4>
                    <h4>{props.source}</h4>
                </div>
            </div>
        </div >
    );
}

export default NewsFeed;