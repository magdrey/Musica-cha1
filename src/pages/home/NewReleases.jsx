import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Newrel } from "./NewReleasesData";

function NewReleases() {
  return (
    <div>
      <p className="TC-tc NR-nr">New Releases.</p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={"auto"}
        direction="horizontal"
        pagination={{ clickable: true }}
        className="swi-NR"
      >
        {Newrel.map(({ img, time, title, artist }, index) => (
          <SwiperSlide className="NR-slide" key={index}>
            <div className="NR-card">
              <div className="NR-img">{img}</div>

              <div className="NR-title">{title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewReleases;
