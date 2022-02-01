import React from "react";
import StoriesList from "../components/StoryList";

import { useQuery } from "@apollo/client";
import { QUERY_STORIES } from "../utils/queries";


const AllStories = () => {
    const { loading, data } = useQuery(QUERY_STORIES);
    const stories = data?.stories || [];


    if (!stories?.length) {
        return <h3 className="text-center text-white rounded">No Stories Yet</h3>;
    }

    return (
        <div className="box-bg rounded-3 box-margin">

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className="px-5 pt-2 my-2 text-center border-bottom card-header">
                        <h3 className="display-6 fw-bold">User Stories</h3>
                    </div>

                    <StoriesList
                        stories={stories}
                        title="Some Feed for Thought(s)..."
                    />

                </div>
            )}



        </div>

    )
}
export default AllStories;
