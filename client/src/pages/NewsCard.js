import React from 'react'

function NewsCards(props) {
    return (
        <div className='card'>
            <div className='card-header text-center'>
                {props.NewsData}
            </div>

        </div>
    )
}

export default NewsCards;