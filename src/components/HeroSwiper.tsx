"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import { extractBreed } from "@/utils/extractBreed";
import { LuPawPrint } from "react-icons/lu";

interface HeroSwiperProps {
  images: string[];
}

export default function HeroSwiper({ images }: HeroSwiperProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: "#button_prev",
          nextEl: "#button_next",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop
        className="md:w-[600px] md:h-[500px]"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className={styles["swiper-slide"]}>
            <p className="absolute top-[5px] left-0 text-6xl text-white whitespace-nowrap">
              {extractBreed(image)}
            </p>
            <div className="md:w-[500px] md:h-[350px] relative">
              <Image
                src={image}
                alt={image}
                width={600}
                height={450}
                className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-black"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        id="button_prev"
        className={`${styles["swiper-button-prev"]} shadow-2xl shadow-black`}
        type="button"
      >
        <LuPawPrint />
      </button>
      <button
        id="button_next"
        className={`${styles["swiper-button-next"]} shadow-2xl shadow-black`}
        type="button"
      >
        <LuPawPrint />
      </button>
    </div>
  );
}
