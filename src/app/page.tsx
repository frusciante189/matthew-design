import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <img
        src="/bg-gradient.avif"
        alt=""
        className="size-full absolute top-0"
      />
      <Hero />
    </div>
  );
}
