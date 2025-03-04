import axios from "axios";
import React, { useEffect, useState } from "react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

const API_URL = "https://fakestoreapi.com/products";

const Carusel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get(`${API_URL}?limit=5`).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const productItems = data?.map((prov) => (
    <SwiperSlide key={prov.id}>
      <div className="flex items-center justify-around gap-8">
        <img
          className="max-h-[500px] object-contain mb-8 max-lg:max-h-[300px] max-md:max-h-[200px] max-[450px]:max-h-[150px]"
          src={prov.image}
          alt="image"
        />
        <div className="max-w-[300px]">
          <h2 className="text-3xl text-blue-700 font-bold max-lg:text-2xl max-md:text-xl">
            {prov.title}
          </h2>
          <p className="text-3xl mt-10 text-blue-600 max-lg:text-3xl max-md:text-2xl">
            ${prov.price}-USD
          </p>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <div className="container max-w-[1250px] m-auto">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          loop={true}
          modules={[Scrollbar, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper w-full h-full mt-16 select-none shadow-lg rounded-lg"
        >
          {productItems}
        </Swiper>
      </div>
    </>
  );
};

export default Carusel;
