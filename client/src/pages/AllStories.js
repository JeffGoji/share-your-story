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
                <StoriesList
                    stories={stories}
                    title="Some Feed for Thought(s)..."
                />
            )}



        </div>

    )
}
export default AllStories;
