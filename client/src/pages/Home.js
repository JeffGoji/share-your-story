import React from "react";
import StoriesList from "../components/StoryList";

import { useQuery } from "@apollo/client";
import { QUERY_STORIES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_STORIES);
  const stories = data?.stories || [];


  return (
    <main>
      <div className="row">
        <div className="col-10 mb-3 ">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <StoriesList
              stories={stories}
              title="User stories..."
            />
          )}
        </div>

      </div>
    </main>
  );
};

export default Home;
