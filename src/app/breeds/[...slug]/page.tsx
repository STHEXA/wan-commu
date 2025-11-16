import DogImage from "@/components/DogImage";
import { replaceSlash } from "@/utils/replaceSlash";

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
        <DogImage breeds={newBreeds} image={dogImage} />
        <div>
          <h2>{breeds}</h2>
        </div>
      </div>
    </div>
  );
}
