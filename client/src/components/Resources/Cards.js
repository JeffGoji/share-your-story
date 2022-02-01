import React from 'react';


function Cards(props) {

    return (
        <div className="card p-2 card-shadow border-0 mb-4">
            <div className="card-header text-center">
                <strong>{props.name}</strong>
            </div>
            <div className="card rounded-2 mt-3 mb-2">
                <img alt={props.name} src={props.image} className="rounded card-img-top" />
                <div className="card-body">
                    <h6 className="card-title text-center">{props.name}</h6>
                    <p className="card-text">{props.description}
                    </p>
                </div>
                <div className="card-body">
                    <a href={props.link} rel="noopener noreferrer" className="p-2 text-center">Link to Webpage</a>
                </div>
            </div>
        </div>


    );
}

export default Cards;