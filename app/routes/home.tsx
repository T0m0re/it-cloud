import type { Route } from "../+types/root";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nimbus IT Solutions" },
    { name: "description", content: "Reliable cloud, network & security services for growing businesses." },
  ];
}

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero/>
      </section>
    </main>
  );
}
