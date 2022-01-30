import React from 'react';
import { Link } from 'react-router-dom';

//This is the new template that will be refractored with data once data is working.
const StoriesList = ({ stories, title }) => {
    if (!stories?.length) {
        return <h3 className="text-center text-white bg-dark rounded">No Stories Yet</h3>;
    }

    return (
        <div className="container-lg">
            <div className='d-flex justify-content-center box-bg-dark text-white rounded-3'>
                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h3 className="display-4 fw-bold">User Stories</h3>
                    <div className="col-lg-6 mx-auto">
                        {/* <p className="lead mb-4">This page is where user's stories will be displayed for general view, you will be able to login and see them on your dashboard as well.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Login</button>
                        <button type="button" className="btn btn-danger btn-lg px-4">Sign-Up</button>
                    </div> */}
                    </div>
                    {/* <div className="overflow-hidden" style={{ height: '5vh' }}>
                </div> */}

                    {/* Stories area: */}

                    <div className="container px-4 py-5" id="featured-3">
                        {/* <h2 className="pb-2 border-bottom">Stories Below</h2> */}
                        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                            {stories &&
                                stories.map((story) => (

                                    <>
                                        <div className="feature col">
                                            <h2>{story.title}</h2>
                                            {story.title} {story.createdAt}
                                            <p>{story.storyText}</p>
                                            <Link to={`/story/${story._id}`}>
                                                Click for full stories</Link>


                                        </div>
                                        {/* <div className="feature col">
                                        <h2>Featured title</h2>
                                        <p>Paragraph of text beneath the heading to explain the heading. This will contain a snippet of the stories the user is telling.</p>
                                        <a href="#" className="icon-link">
                                            Click for full stories

                                        </a>
                                    </div>
                                    <div className="feature col">
                                        <h2>Featured title</h2>
                                        <p>Paragraph of text beneath the heading to explain the heading. This will contain a snippet of the stories the user is telling.</p>
                                        <a href="#" className="icon-link">
                                            Click for full stories

                                        </a>

                                    </div> */}
                                    </>
                                ))}
                        </div>

                    </div>

                </div >
            </div>
        </div>
    )
}
export default StoriesList;