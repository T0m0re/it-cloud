import Hero from "~/components/Hero";
import FeatureGrid from "~/components/FeatureGrid";
import Footer from "~/components/Footer";
import type { Route } from "./+types/home";
import WhyChooseUs from "~/components/WhyChooseUs";
import Services from "~/components/Services";
import Testimonials from "~/components/Testimonials";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Nimbus IT" },
    { name: "description", content: "Reliable cloud, network & security services for growing businesses." },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
