import React, { FC, Fragment } from "react";

import {
  About,
  Banner,
  CompanySuccess,
  OurServices,
  OurTeam,
} from "./components";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <About />
      <OurServices />
      <OurTeam />
      <CompanySuccess />
    </Fragment>
  );
};

export default HomePage;
