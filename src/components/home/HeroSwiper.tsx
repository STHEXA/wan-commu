"use client";

import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import { extractBreed } from "@/utils/extractBreed";

interface HeroSwiperProps {
  images: string[];
}

export default function HeroSwiper({ images }: HeroSwiperProps) {
  return (
    <div className="[&_.swiper]:overflow-visible">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop
        className="md:w-[600px] md:h-[450px] overflow-visible"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className="md:w-[600px] md:h-[450px] relative"
          >
            <p className="absolute top-[-20px] left-0 text-6xl text-white">
              {extractBreed(image)}
            </p>
            <Image
              src={image}
              alt={image}
              width={600}
              height={450}
              className="w-full h-full object-cover rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
