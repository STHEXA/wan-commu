"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { TbReload } from "react-icons/tb";
import { fetchOtherImage } from "@/api/fetchOtherImage";

interface DogImageProps {
  breeds: string;
  image: string;
}

export default function DogImage({ breeds, image }: DogImageProps) {
  const { data, refetch, isFetching } = useQuery({
    queryKey: [breeds],
    queryFn: () => fetchOtherImage(breeds),
    initialData: image,
    enabled: false,
  });

  const getOtherImage = async () => {
    await refetch();
  };

  return (
    <button
      className="group rounded-3xl w-[700px] h-[525px] overflow-hidden relative border-4 border-amber-500 cursor-pointer"
      onClick={getOtherImage}
      type="button"
    >
      {isFetching ? (
        <DotLottieReact src="/lottie/paw-pads.lottie" loop autoplay />
      ) : (
        <>
          <Image
            src={data ?? image}
            alt={breeds}
            width={500}
            height={375}
            className="w-full h-full object-cover"
          />
          <p className="group-hover:opacity-100 flex absolute bottom-3 right-3 bg-gray-100 py-2 px-3 rounded-3xl items-center justify-center gap-2 opacity-0 transition-opacity duration-300 ease-in-out">
            <TbReload />
            別の画像表示
          </p>
        </>
      )}
    </button>
  );
}
