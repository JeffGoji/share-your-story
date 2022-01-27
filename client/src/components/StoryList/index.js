import React from 'react';
import { Link } from 'react-router-dom';


// function StoryList() {

//     return (
//         <div className='d-flex justify-content-center box-bg-dark text-white rounded-3'>
//             <div className="px-4 pt-5 my-5 text-center border-bottom">
//                 <h1 className="display-4 fw-bold">User Stories</h1>
//                 <div className="col-lg-6 mx-auto">
//                     <p className="lead mb-4">This page is where user's stories will be displayed for general view, you will be able to login and see them on your dashboard as well.</p>
//                     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
//                         <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Login</button>
//                         <button type="button" className="btn btn-danger btn-lg px-4">Sign-Up</button>
//                     </div>
//                 </div>
//                 <div className="overflow-hidden" style={{ height: '5vh' }}>
//                 </div>

//                 {/* Story area: */}
//                 <div className="container px-4 py-5" id="featured-3">
//                     <h2 className="pb-2 border-bottom">Stories Below</h2>
//                     <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
//                         <div className="feature col">
//                             <h2>User Story</h2>
//                             <p>Paragraph of text beneath the heading to explain the heading. This will contain a snippet of the story the user is telling.</p>
//                             <a href="#" className="icon-link">
//                                 Click for full story

//                             </a>
//                         </div>
//                         <div className="feature col">
//                             <h2>Featured title</h2>
//                             <p>Paragraph of text beneath the heading to explain the heading. This will contain a snippet of the story the user is telling.</p>
//                             <a href="#" className="icon-link">
//                                 Click for full story

//                             </a>
//                         </div>
//                         <div className="feature col">
//                             <h2>Featured title</h2>
//                             <p>Paragraph of text beneath the heading to explain the heading. This will contain a snippet of the story the user is telling.</p>
//                             <a href="#" className="icon-link">
//                                 Click for full story

//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </div>
//     )
// }

const StoryList = ({ story, title }) => {
    if (!story.length) {
        return <h3>No Stories Yet</h3>;
    }

    return (
        <div>

            <h3>{title}</h3>
            {story &&
                story.map(story => (
                    <div key={story._id} classNameName="card mb-3">
                        <p classNameName="card-header">
                            <Link
                                to={`/profile/${story.username}`}
                                style={{ fontWeight: 700 }}
                                classNameName="text-light"
                            >
                                {story.username}
                            </Link>{' '}
                            story on {story.createdAt}
                        </p>
                        <div classNameName="card-body">
                            <Link to={`/story/${story._id}`}>
                                <p>{story.storyText}</p>
                                <p classNameName="mb-0">
                                    Reactions: {story.reactionCount} || Click to{' '}
                                    {story.reactionCount ? 'see' : 'start'} the discussion!
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default StoryList;