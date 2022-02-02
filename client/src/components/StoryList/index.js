import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { DELETE_STORY, UPDATE_STORY } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


const StoriesList = ({ stories }) => {
    const loggedIn = Auth.loggedIn();
    
    const [deleteStory] = useMutation(DELETE_STORY)

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteStory = async (storyId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    console.log(storyId);
    try {
      const { data } = await deleteStory({
        variables: { storyId },
      });
      
      deleteStory(storyId);
    } catch (err) {
      console.error(err);
    }

    
    

    if (!stories?.length) {
        return <h3 className="text-center text-white bg-dark rounded">No Stories Yet</h3>;
    }
   
  };

    return (

        <div className="container-fluid mb-3">
            {/* <div className='d-flex justify-content-center text-white rounded-3'>
            </div> */}

            <div className="px-0 py-2" id="featured-3">
                <div className="row">
                    {stories &&
                        stories.map((story) => (
                            <React.Fragment key={story}>
                                <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                                    <div className='card box-bg-dark rounded-3 text-white m-2 rounded-3 '>
                                        <div>
                                            <h2 className='p-1'>{story.storyTitle}</h2>
                                        </div>

                                        <div>{story.createdAt}</div>
                                        <div className='col text-truncate'>
                                            <p>{story.storyText}</p>

                                        </div>
                                        <div>
                                            <Link to={`/story/${story._id}`}>Click for full stories</Link>
                                        </div>
                                        <br />
                                        <div className='mb-5'>
                                            <form>
                                                {loggedIn && (
                                                    <>
                                                        <button onClick={() => handleDeleteStory(story._id)} type="button" className="btn btn-danger btn-sm px-4 mt-2 m-1"

                                                        >Delete Story</button>

                                                        <button type="button" className="btn btn-warning btn-sm px-4 mt-2 m-1"

                                                        >Edit Story</button>
                                                    </>
                                                )}
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </React.Fragment>
                        ))}

                </div>

            </div>
            {/* // Other User stories: */}


        </div >
        // </div >
    )
}
export default StoriesList;