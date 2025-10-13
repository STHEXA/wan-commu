import Image from "next/image";
import Link from "next/link";

export default async function DogList() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();
  const message: Record<string, string[]> = data.message;
  const breedList = Object.entries(message).flatMap(([key, values]) =>
    values.length === 0 ? [key] : values.map((v) => `${v} ${key}`)
  );
  console.log("犬種一覧" + breedList);

  const breedImageList: string[] = await Promise.all(
    breedList.map(async (breed) => {
      const parts = breed.split(" ");

      const apiPath = parts.length === 1 ? parts[0] : `${parts[1]}/${parts[0]}`;

      const res = await fetch(
        `https://dog.ceo/api/breed/${apiPath}/images/random`
      );
      const data = await res.json();
      return data.message as string;
    })
  );

  console.log(breedImageList);

  return (
    <div className="flex justify-center gap-3 flex-col items-center">
      <h2 className="">犬種リスト</h2>
      <ul className="flex gap-3 flex-wrap justify-center">
        {breedList.map((breed, index) => (
          <li key={breed}>
            <Link href="/">
              <div className="w-[300px] h-[225px]">
                <Image
                  src={breedImageList[index]}
                  alt={breed}
                  width={300}
                  height={225}
                  className="object-cover aspect-4/3"
                ></Image>
              </div>
              <p>{breed}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
