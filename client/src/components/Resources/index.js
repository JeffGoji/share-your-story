import React from "react";

//Pages:
import Newsfeed from "../../pages/Newsfeed";


function MainPage() {
  return (

    <div className="d-flex justify-content-center box-margin">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 rounded-3 card-shadow box-bg">
        <div className="card-header text-center">
          <h2>Resources</h2>
        </div>
        <p className="text-center p-2">On this page you will find links to articles and a form to get in touch with us to help you find a lawyer for your case.</p>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-5 mt-4">
            <h3 className="text-center">Links</h3>
            <ul>
              <li></li>
            </ul>

            {/* <ArticleList /> */}
            {/* <TxLaw /> */}
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-5 mt-4">
            {/* <h3 className="text-center">News Feed</h3> */}
            <Newsfeed />
          </div>
        </div>
      </div>
    </div >

  );
} export default MainPage;
