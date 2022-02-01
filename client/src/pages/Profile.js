import React from 'react';

import { Navigate, useParams, } from 'react-router-dom';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
// import Newsfeed from './Newsfeed';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_STORIES } from '../utils/queries';
import Auth from '../utils/auth';
import StoryForm from '../components/StoryForm';
import StoriesList from '../components/StoryList';
// import AllStories from './AllStories';


const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, QUERY_STORIES, {
        variables: { username: userParam }
    });


    const user = data?.me || data?.user || {};
    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/Profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }
    return (
        <div>
            <main className="container-large box-bg rounded-3 card-shadow">
                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">{user.username}'s User Hub</h1>
                        <p>You may read, edit, or delete your stories below, or you can write a new story.
                            <br />
                            If you’re filing a lawsuit, please be careful with the information you share online.
                            <br />
                            Talk to your attorney before you decide to share confidential information online – you don’t want the opposing party to use something you shared online against you.
                        </p>

                    </div>
                </div>

                <div className="px-5 pt-2 my-2 text-center border-bottom card-header">
                    <h3 className="display-6 fw-bold">Your Stories</h3>
                </div>
                <StoriesList stories={user.stories} />

                <StoryForm />

            </main >
        </div>

    )
}


export default Profile;