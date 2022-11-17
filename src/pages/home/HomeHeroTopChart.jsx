import React from "react";
import img1 from "../../assets/pexelimg.png";
import imgb1 from "../../assets/bherovec.png";
import hrt from "../../assets/Heart.png";
import picelp from "../../assets/picelip.png";
import imgbL from "../../assets/bevecL.png";
import Topcharts from "./Topcharts";

function HomeHeroTopChart() {
  return (
    <div className="homeHero">
      <div className="hero">
        <div className="herotxt">
          <p className="ht1"> current playlist</p>
          <h2 className="ht2"> R&B hits </h2>
          <p className="ht3"> all mine, nothing, love again and so much more</p>
          <div className="herolike">
            <div className="imgandlikeheart">
              <img className="pi1" src={picelp} alt="img" />
              <img className="pi2" src={hrt} alt="hrt" />
            </div>
            <p className="h-likes"> 33K Likes</p>
          </div>
        </div>
        <div className="heroimg">
          <img src={img1} alt="img" className="he-im" />
          <img src={imgbL} alt="img" className="bavecL" />
        </div>
        <img className="bavec" src={imgb1} alt="img" />
      </div>
      <div className="topcha">
        <p className="TC-tc"> Top Charts</p>
        <Topcharts />
      </div>
    </div>
  );
}

export default HomeHeroTopChart;
