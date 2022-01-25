import React from 'react';

function Newsfeed() {


    return (
        <div className="card p-2 card-shadow">
            <div className="card-header text-center  rounded-1">
                News Feed
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>This is where News post will go fed by an API with very specific search criteria.</p>

                </blockquote>
            </div>
        </div>
    );
}

export default Newsfeed;