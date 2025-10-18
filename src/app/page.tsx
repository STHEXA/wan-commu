import DogList from "@/components/DogList";
import Hero from "@/components/Hero";
import Header from "@/components/layouts/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <DogList />
      </main>
      <footer className=""></footer>
    </div>
  );
}
