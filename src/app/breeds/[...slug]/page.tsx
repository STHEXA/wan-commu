import { AllDogs } from "@/type/dog";

export async function generateStaticParams() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data: AllDogs = await res.json();

  const breeds = data.message;

  const paths = Object.entries(breeds).flatMap(([breed, subBreeds]) =>
    subBreeds.length === 0
      ? [{ slug: [breed] }]
      : subBreeds.map((sub: string) => ({ slug: [breed, sub] }))
  );

  return paths;
}

type BreedPageProps = {
  params: {
    slug: string[];
  };
};

export default function BreedPage({ params }: BreedPageProps) {
  const [main, sub] = params.slug;
  return (
    <div>
      <h2>{main}</h2>
      <p>{sub}</p>
    </div>
  );
}
