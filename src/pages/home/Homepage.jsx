import React from "react";
import HomeHeroTopChart from "./HomeHeroTopChart";
import "./Homepage.css";
import NewReleases from "./NewReleases";

function Homepage() {
  return (
    <div className="Pages">
      <HomeHeroTopChart />
      <NewReleases />
      <div className="bspace"> </div>
    </div>
  );
}

export default Homepage;
