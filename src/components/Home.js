import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Quiz-App-Home</title>
    </Helmet>
    <div id="Home">
      <section>
        <div>
          <span className="mdi-mdi-cube-outline"></span>
        </div>
      </section>
    </div>
  </Fragment>
);
export default Home;
