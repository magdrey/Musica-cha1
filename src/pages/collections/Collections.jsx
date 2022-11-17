import React from "react";
import { collec } from "./CollectionsData";
import "./Collection.css";
import { BiPlay } from "react-icons/bi";

function Collections() {
  return (
    <div className="Pages">
      <div className="toptions">
        <p className="topt clt"> collections </p>
        <p className="topt"> likes</p>
      </div>

      <div className="coll-cont">
        {collec.map(({ img, title, artist, likes }, index) => (
          <div
            className="MC-card"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
            key={index}
          >
            <div className="MC-txt">
              <div className="OFT1"> {title}</div>
              <div className="OFT2 MC-ar"> {artist} </div>
              <div className="OFT1 MC-lik"> {likes} likes</div>
            </div>
            <BiPlay className="cltplay" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
