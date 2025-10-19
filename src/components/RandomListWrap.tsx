import type { RandomDogs } from "@/type/dog";
import RandomList from "./RandomList";

export default async function RandomListWrap() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/9");
  const data: RandomDogs = await res.json();
  const randomList = data.message;
  return (
    <div className="">
      <RandomList breedsList={randomList} />
    </div>
  );
}
