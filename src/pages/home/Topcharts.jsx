import React from 'react'
import { topcharts } from './Topchartsdata'
import Imghrt from "../../assets/tchrt.svg"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import "swiper/css/pagination";
import "swiper/css/scrollbar";


function Topcharts() {

    
  return (
    <>

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1.5}
     direction='horizontal'
        pagination={{ clickable: true }}
        className="swi-TC"
      >
  
{topcharts.map(
        ({ img, time, title, artist}, index) => (
          <SwiperSlide className="TC-slide" key={index}>
          <div className="TC-card" >
            <div className="TC-img">{img}</div>

            <div className="TC-body">
              <div className="TC-txt">
              <div className="OFT1 Gilroy-B"> {title}</div>
              <div className="OFT2 Gilroy-M"> {artist} </div>
              <div className="OFT3 Gilroy-M"> {time} </div>
            </div>

            <div className="TC-hrt">
            <img src={Imghrt} className='tchrt' alt="hrt" />
            </div>
            </div>
          </div>
          </SwiperSlide>
        )
      )}

      </Swiper>
     <div className='bg-Tc'>
        {topcharts.slice(0, 3).map(
            ({ img, time, title, artist}, index) => (
              <div className="TC-card" key={index} >
                <div className="TC-img">{img}</div>
    
                <div className="TC-body">
                  <div className="TC-txt">
                  <div className="OFT1 Gilroy-B"> {title}</div>
                  <div className="OFT2 Gilroy-M"> {artist} </div>
                  <div className="OFT3 Gilroy-M"> {time} </div>
                </div>
    
                <div className="TC-hrt">
                <img src={Imghrt} className='tchrt' alt="hrt" />
                </div>
                </div>
              </div>
             
            )
          )} </div>
   
      

    </>
  )
}

export default Topcharts