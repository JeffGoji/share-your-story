import React, { useState } from "react";

//Pages:
import Newsfeed from "../../pages/Newsfeed";
import rlinks from "./resourcedata";
import Card from "./Cards";



function MainPage(props) {
  const [resourcesList] = useState(rlinks);

  return (

    <div className="row justify-content-center box-margin rounded-3 card-shadow box-bg">
      {/* <div className="container-fluid"> */}
      <div className="card-header text-center">
        <h2>Resources</h2>
        <p className="text-center p-2 fs-4">On this page you will find links to resources for help and recovery as well as news articles covering medical malpractice.</p>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4">
        <h3 className="text-center">Support Links</h3>
        {props.children}
        {resourcesList.map((rlinks) => (

          <Card
            key={rlinks.id}
            name={rlinks.name}
            image={rlinks.image}
            description={rlinks.description}
            link={rlinks.link}
          />
        ))}
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 mt-4">
        <h3 className="text-center">News Feed</h3>
        <Newsfeed />

      </div>
    </div>



  );
} export default MainPage;
