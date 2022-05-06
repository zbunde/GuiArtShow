import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

const BASE_URL =
  "https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-2.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-3.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-4.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-5.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-6.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-7.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-8.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-9.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-10.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-11.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-12.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-13.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-13.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-14.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-15.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-16.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-17.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-18.tif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/Gui_Machado_Experimental_Paradigm-19.tif" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
