import { Hero, Ticker } from "@/components/hero";
import { Featured } from "@/components/featured";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Featured />
      <About />
    </main>
  );
}
