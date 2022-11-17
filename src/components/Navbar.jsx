import logo from "../assets/logo.svg";
import ham from "../assets/menu 1.png";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import img1 from "../assets/Home.svg";
import img2 from "../assets/playlist.svg";
import img3 from "../assets/radio.svg";
import img4 from "../assets/videos.svg";
import img5 from "../assets/profile.svg";
import img6 from "../assets/Logout.svg";
import img7 from "../assets/Home-1.svg";
import img8 from "../assets/playlist-1.svg";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [hamopen, setHamopen] = useState(false);
  const toggleham = () => setHamopen(!hamopen);
  const toggleclose = () => setHamopen(false);

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="musNav">
      <div className="navitem-hori">
        <img className="ham" src={ham} onClick={toggleham} alt="menu" />
        <div className="logo-searchbar">
          <img className="logo" src={logo} alt="logo" />
          <form action="" className="navsearchbar">
            <FaSearch className="sch-icon" />
            <input
              placeholder="search artist"
              type="text"
              className="search-inp"
            />
          </form>
        </div>
      </div>

      <div className={`${hamopen ? "navshow" : "navhid"} "NavLinks" `}>
        <div className="navitem-verti">
          <div className="navhome">
            <Link
              to="/"
              onClick={toggleclose}
              className={pathMatchRoute("/") ? "actnav" : "link-to"}
            >
              <img
                className={pathMatchRoute("/") && "activepage"}
                src={pathMatchRoute("/") ? img1 : img7}
                alt="img"
              />
              <h3 className="navname">Home</h3>
            </Link>
          </div>
          <div className="navhome">
            <Link
              to="/MyCollections"
              onClick={toggleclose}
              className={
                pathMatchRoute("/MyCollections") ? "actnav" : "link-to"
              }
            >
              <img
                className={pathMatchRoute("/MyCollections") && "activepage"}
                src={pathMatchRoute("/MyCollections") ? img2 : img8}
                alt="img"
              />
              <h3 className="navname">My collections</h3>
            </Link>
          </div>
          <div className="navhome">
            <img src={img3} alt="img" />
            <h3 className="navname">Radio</h3>
          </div>
          <div className="navhome">
            <img src={img4} alt="img" />
            <h3 className="navname">Music Video</h3>
          </div>
        </div>
        <div className="navitem-verti">
          <div className="navhome">
            <img src={img5} alt="img" />
            <h3 className="navname">Profile</h3>
          </div>
          <div className="navhome">
            <img src={img6} alt="img" />
            <h3 className="navname">Log Out</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
