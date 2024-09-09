import Gallery from "@/containers/home-page/Gallery";
import Hero from "@/containers/home-page/Hero";
import Seo from "@/containers/home-page/Seo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Seo />
    </div>
  );
}
