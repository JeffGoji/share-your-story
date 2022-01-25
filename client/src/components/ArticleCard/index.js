import React from 'react';

const ArticleCard = (props) => {
    return (

        <div className="card p-2 card-shadow mt-2">
            <div className="card-header text-center rounded-1">
                <h3 className="text-center">{props.title}</h3>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{props.description}</p>
                </blockquote>
            </div>
        </div>
    )

}

export default ArticleCard;