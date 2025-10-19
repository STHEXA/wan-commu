"use client";

import Image from "next/image";
import { useState } from "react";
import type { RandomDogs } from "@/type/dog";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@/components/ui/button";
import { LuDog } from "react-icons/lu";
import Link from "next/link";
import { extractBreed } from "@/utils/extractBreed";
import { FaDog } from "react-icons/fa6";

interface RandomListProps {
  breedsList: string[];
}

export default function RandomList({ breedsList }: RandomListProps) {
  const [list, setList] = useState(breedsList);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animMap, setAnimMap] = useState<Record<string, string>>({});
  const animations = [
    "animate-wiggle",
    "animate-bounce",
    "animate-pulse-scale",
  ];

  const handleReload = async () => {
    try {
      setLoading(true);
      setError(false);
      const [res] = await Promise.all([
        fetch("https://dog.ceo/api/breeds/image/random/9"),
        new Promise((resolve) => setTimeout(resolve, 1700)),
      ]);
      if (!res.ok) {
        throw new Error("データ取得に失敗しました。");
      }
      const data: RandomDogs = await res.json();
      if (data.message.length <= 0) {
        throw new Error("他の子来てくれなかったみたいです...");
      }
      setList(data.message);
    } catch (e) {
      if (e instanceof Error) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = (key: string) => {
    const randomAnim =
      animations[Math.floor(Math.random() * animations.length)];
    setAnimMap((prev) => ({ ...prev, [key]: randomAnim }));
  };

  const handleMouseLeave = (key: string) => {
    setAnimMap((prev) => ({ ...prev, [key]: "" }));
  };

  return (
    <div className="p-[25px]">
      <div className="flex items-center justify-between mb-[30px]">
        <h2 className="text-3xl flex items-center gap-[15px]">
          <FaDog />
          犬種リスト
        </h2>
        <Button variant="outline" size="sm" onClick={handleReload}>
          <LuDog />
          他の子達を表示
        </Button>
      </div>
      {error ? (
        <div>
          <p>
            データの取得に失敗しました。時間を明けて再度押してみてください。
          </p>
          <p>(機嫌が良くないのかも...)</p>
        </div>
      ) : loading ? (
        <DotLottieReact
          src="https://lottie.host/c96a455b-10ad-4a28-9b79-1e0f22df03c2/3OsHlF0ELx.lottie"
          loop
          autoplay
        />
      ) : (
        <ul className="flex flex-wrap gap-[30px] items-center justify-center">
          {list.map((img) => (
            <li
              key={img}
              className={`w-[300px] h-[200px] overflow-hidden rounded-3xl relative ${
                animMap[img] ?? ""
              }`}
              onMouseEnter={() => handleMouseEnter(img)}
              onMouseLeave={() => handleMouseLeave(img)}
            >
              <Link href={`/breeds/${extractBreed(img)}/`}>
                <Image
                  src={img}
                  alt=""
                  width={300}
                  height={225}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-[10px] left-[5px] text-white bg-amber-600 rounded-3xl py-[5px] px-[10px]">
                  {extractBreed(img)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
