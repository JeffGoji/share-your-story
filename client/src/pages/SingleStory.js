import React from 'react';
import { useParams } from 'react-router-dom';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_STORY } from '../utils/queries';

const SingleStory = (props) => {
    const { id: storyId } = useParams();

    const { loading, data } = useQuery(QUERY_STORY, {
        variables: { id: storyId },
    });

    const story = data?.story || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{ fontWeight: 700 }} className="text-light">
                        {story.username}
                    </span>{' '}
                    Story on {story.createdAt}
                </p>
                <div className="card-body">
                    <p>{story.storyText}</p>
                </div>
            </div>

            {story.commentCount > 0 && (
                <CommentList comments={story.comments} />
            )}

            {Auth.loggedIn() && <CommentForm storyId={story._id} />}
        </div>
    );
};

export default SingleStory;