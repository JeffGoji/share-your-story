import React from "react";
import StoryList from "../components/StoryList";
import StoryForm from "../components/StoryForm";


import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME_BASIC, QUERY_STORIES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_STORIES);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const stories = data?.stories || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <StoryForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <StoryList
              stories={stories}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
     
      </div>
    </main>
  );
};

export default Home;
