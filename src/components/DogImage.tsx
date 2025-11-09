import Image from "next/image";
import { TbReload } from "react-icons/tb";

interface DogImageProps {
  breeds: string;
  image: string;
}

export default function DogImage({ breeds, image }: DogImageProps) {
  return (
    <div className="group rounded-3xl w-[700px] h-[525px] overflow-hidden relative">
      <Image
        src={image}
        alt={breeds}
        width={500}
        height={375}
        className="w-full h-full object-cover"
      />
      <p className="group-hover:flex absolute bottom-3 right-3 bg-gray-100 py-2 px-3 rounded-3xl items-center justify-center gap-2 hidden">
        <TbReload />
        別の画像表示
      </p>
    </div>
  );
}
