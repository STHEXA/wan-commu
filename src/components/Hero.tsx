import { RandomDogs } from "@/type/dog";
import HeroSwiper from "./HeroSwiper";

export default async function Hero() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data: RandomDogs = await res.json();
  if (!res.ok) {
    throw new Error("APIの取得に失敗しました。");
  }
  console.log("data" + data.message);
  return (
    <div className="bg-[url('/images/lawn.jpg')] pb-6 pt-36 overflow-hidden flex justify-center items-center">
      <HeroSwiper images={data.message} />
    </div>
  );
}
