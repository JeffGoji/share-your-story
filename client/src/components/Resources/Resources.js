import React from "react";

//Pages:
import TxLaw from "../../pages/TxLaw";


function MainPage() {
  return (

    <div className="d-flex justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 rounded-3 card-shadow box-bg">
        <div className="card-header text-center">
          <h2>Resources</h2>
        </div>

        <TxLaw />
      </div>
    </div>



  );
} export default MainPage;
