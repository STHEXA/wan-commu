import DogImage from "@/components/DogImage";
import { AllDogs } from "@/type/dog";
import { replaceSlash } from "@/utils/replaceSlash";

// export async function generateStaticParams() {
//   const res = await fetch("https://dog.ceo/api/breeds/list/all");
//   const data: AllDogs = await res.json();

//   const breeds = data.message;

//   const paths = Object.entries(breeds).flatMap(([breed, subBreeds]) =>
//     subBreeds.length === 0
//       ? [{ slug: [breed] }]
//       : subBreeds.map((sub: string) => ({ slug: [breed, sub] }))
//   );

//   return paths;
// }

type BreedPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function BreedPage({ params }: BreedPageProps) {
  const { slug } = await params;
  const [breeds] = slug;
  const newBreeds = replaceSlash(breeds);

  const res = await fetch(
    `https://dog.ceo/api/breed/${newBreeds}/images/random`
  );

  const data = await res.json();
  const dogImage = data.message;

  return (
    <div className="pt-[150px] flex justify-center items-center">
      <div>
        <DogImage breeds={breeds} image={dogImage} />
        <div>
          <h2>{breeds}</h2>
        </div>
      </div>
    </div>
  );
}
