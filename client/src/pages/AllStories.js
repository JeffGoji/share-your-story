import React from "react";

import { Link, useParams } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { QUERY_STORY, } from '../utils/queries';

const AllStories = ({ getAllStories }) => {

    const { id: ID } = useParams();
    const { loading, error, data } = useQuery(QUERY_STORY, {
        variables: { id: ID },
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // if (!stori?.length) {
    //     return <h3 className="text-center text-white bg-dark rounded">No Stories Yet</h3>;
    // }

    return (
        <div className="container-fluid mb-3">
            <div className='d-flex justify-content-center box-bg-dark text-white rounded-3'>
                <div className="px-5 pt-2 my-2 text-center border-bottom">
                    <h3 className="display-7 fw-bold">Stories</h3>

                </div>
            </div>

            <div className="px-4 py-5" id="featured-3">

                <div className="row row-cols-3">

                    {getAllStories &&
                        getAllStories.map((story) => (

                            <>
                                <div>
                                    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                        <h2 bg-primary>{getAllStories.storyTitle}</h2>
                                    </div>
                                    <div>{story.createdAt}</div>
                                    <div className='col text-truncate'>
                                        <p>{story.storyText}</p>

                                    </div>
                                    <div>
                                        <Link to={`/story/${story._id}`}>Click for full stories</Link>
                                    </div>
                                    <br />

                                    {/* <div className='mb-5'>
                                        <button type="button" className="btn btn-danger btn-sm <px-4 mt-2">Delete Story</button>

                                    </div> */}
                                </div>

                            </>
                        ))}

                </div>

            </div>
            {/* Other User stories:*/}


        </div >

    )
}

export default AllStories;
