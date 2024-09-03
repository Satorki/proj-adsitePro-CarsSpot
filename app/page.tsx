import Gallery from "@/containers/home-page/Gallery";
import Hero from "@/containers/home-page/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
    </main>
  );
}
